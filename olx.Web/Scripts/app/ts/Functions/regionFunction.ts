import { Injectable, OnInit } from '@angular/core';
import { homeService } from '../Services/homeService';
import {
    region_cityModel,
    popUpModel,
    CityModel,
    stateModel,
    selected_cityModel
} from '../Model/region_andCity'

@Injectable()           // use to emit/hide Metadata of service
export class regionFunction {
    private country_andRegions: region_cityModel[];  //  by default public
    popUpModel: popUpModel;
    selected_city: selected_cityModel;

    constructor(homeSvc: homeService) {
        // alert('in contructor.. call once');

        // initalizing variable so that it can access to the below fxs.. otherwise give rutime error
        this.popUpModel = {
            popularCity :[],
            state_UT: []
        };

        // scope to the constructor only
        homeSvc.get_RegionOrCity()
            .subscribe(
            (data: any) => {
                this.country_andRegions = data.result;
                this.getCountry_andRegions();
            },
            (error: any) => console.log(error)
            );
    }

    private getCountry_andRegions() {
        this.popUpModel.popularCity = this.parseModel(this.country_andRegions.filter(x => x.isPopular === true));
        this.popUpModel.state_UT = this.parse_state_UT();
    }

    private parse_state_UT(): CityModel[] {    // fx is returning list of type 'CityModel'
        return this.chunk(
            this.country_andRegions.filter(x => x.Level === 1).map(x => {
                let a: CityModel = {
                    Id: x.Id,
                    CityName: x.CityName,
                    StateId: null,        // bocz this list is of states
                    hasCity: this.country_andRegions.some(a => a.ParentId === x.Id)
                };
                return a;
            }), 4);
    }

    private parseModel(list: region_cityModel[]): stateModel[] {    // fx is returning list of type 'CityModel'
        return list.map(x => {
            let a: stateModel = {
                Id: x.Id,
                CityName: x.CityName,
                StateId: x.ParentId
            };
            return a;
        });
    }

    private chunk(arr: any[], size: number): any[] {
        var newArr = [];
        var colSize = arr.length / size;  // contain size of column

        if (arr.length % size !== 0)      // for adjust columns data lenth
            colSize += 1;

        for (var i = 0; i < arr.length; i += colSize) {
            newArr.push(arr.slice(i, colSize + i));
        }
        return newArr;
    }

    findCity(model: CityModel): stateModel[] {
        let fixedContent: stateModel[] = [];    // initailse array to empty to use it below
        fixedContent.push({ Id: 0, CityName: 'Change Region', StateId: null });
        fixedContent.push({ Id: model.Id, CityName: 'Whole ' + model.CityName, StateId: null });

        var citys = this.parseModel(this.country_andRegions
            .filter(x => x.ParentId == model.Id));

        return this.chunk(fixedContent.concat(citys), 4);  // concat witll merge 2 array data into single list
    }

    set_selectedCity(model: stateModel) {
        this.selected_city = {
            Id: model.Id,
            CityName: model.StateId === null ? model.CityName.replace('Whole ', '') : model.CityName,
            StateName: model.StateId === null
                ? ''
                : this.country_andRegions.find(x => x.Id === model.StateId).CityName
        };
    }

    findSuggestion(srchTxt: string): selected_cityModel[] {
        var res = (srchTxt.length <= 3)
            ? this.country_andRegions
                .filter(x => (x.CityName + "").toLowerCase().indexOf(srchTxt.toLowerCase()) === 0)
            : this.country_andRegions
                .filter(x => (x.CityName + "").toLowerCase().includes(srchTxt.toLowerCase()));

        return res.map(x => {
            let a: selected_cityModel = {
                Id: x.Id,
                CityName: x.CityName,
                StateName: x.Level === 1
                    ? 'State'
                    : this.country_andRegions.find(a => a.Id === x.ParentId).CityName,
            };
            return a;
        })
    }

}