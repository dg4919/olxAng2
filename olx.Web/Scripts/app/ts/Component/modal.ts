import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

import { regionFunction } from '../Functions/regionFunction'
import {
    stateModel,
    CityModel,
    selected_cityModel
} from '../Model/region_andCity'

import { homeService } from '../Services/homeService';

@Component({
    template: ` <div md-dialog-title>   
                <h4 style="margin: 0px !important;"class="box-title">{{ category.category_name }}</h4>         
                <button type="button" class="close" style="margin-top: -20px !important;" md-dialog-close>×</button> 
                <div class="panel panel-default" style="margin-top: 10px;">   
                  <div class="panel-heading">  
                  <div class="row">
                      <div class="col-sm-6"> 
                       <span> 123456 Ads
                       <a href="#"> View All </a> </span>
                      </div>  
                    <div class="col-sm-6 text-right"> 
                     <i class="fa fa-map-marker"> </i>
                     <a href="#"> All India </a> 
                  </div> </div> </div> </div> </div>       
                <md-dialog-content style="padding: 15px 15px !important;">                
                  <div class="row"> 
                    <div class="col-md-4 thumb no_line" 
                        *ngFor="let category of category.sub_categorys; let $index = index">  
                       <a class="thumbnail no_line" 
                          href="#" 
                          (click)="get_categories(categry)" 
                          style="text-align: center;margin-bottom: 15px !important;">           
                       <i [class]="category.icon_name"                                         
                          [style.color]="colorCode[$index]"></i>                      
                       <h4 class="text-center no_line">                                         
                           <small><strong>{{ category.category_name }}</strong> </small> 
                 </h4> </a> </div> </div>
                </md-dialog-content> <md-dialog-actions class="pull-right">
                <button class="btn btn-info" (click)="dialogRef.close(countryId)" md-raised-button>OK</button> </md-dialog-actions> `,
})
export class subCategory_ModalComponent implements OnInit {
    colorCode = [
        "#E65B0A",
        "#6A5DD4",
        "#AB6DE4",
        "#D676DC",
        "#3AE65F",
        "#8293E4",
        "#DC9E34",
        "#E4607F",
        "#dc572e",
        "#00ABA9",
        "#508DAB",
        "#877ABB",
        "#D21019"
    ];
    category: any = [];

    // The Constructor is a default method of the class that is executed when the class is instantiated 
    constructor(
        @Inject(MD_DIALOG_DATA) private entity: any,
        private snackBar: MdSnackBar,
        private dialogRef: MdDialogRef<any>) { }    // dialogRef use to close popup on html page

    // ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component
    public ngOnInit() {
        this.category = this.entity.categoryModel;
    }
}

@Component({
    template: ` <div md-dialog-title                
                     style="font-size: inherit;"> 
                <i class="close fa fa-close" md-dialog-close> </i>       
                <div class="row">                        
                <div style="position: relative;display: flex;"> 
                <div class="col-md-4 col-xs-12">        
               <i class="fa fa-search pos_abs alignItm"></i>        
               <input type="text"                       
                      class="form-control1 txtIndent30" 
                      #searchText
                      placeholder="Enter your city or region" 
                      (keyup)="findSuggestion(searchText.value)"> </div>
                <div class="col-md-12 sugestionBox_main" *ngIf="suggestions.length">
                <div class="list-group sugestionBox">
                  <a href="#" class="list-group-item"
                     (click)="onSelectCity(result)" 
                     *ngFor="let result of suggestions"> 
                  <span [innerHtml]="result.CityName + ','"></span> 
                  <small style="color: #b4b4b4;" [innerHtml]="result.StateName"></small>
                </a> </div></div>
                </div> </div>
                <div class="col-sm-12 col-xs-12 well well-sm" 
                     style="margin-top: 7px !important;"> 
                <h3><p>Popular cities:</p></h3>           
                <div class="col-md-2 col-sm-6 col-xs-6"                     
                    *ngFor="let city of regionSvc.popUpModel.popularCity | sortBy: 'CityName'"> 
                     <a href="#" [innerHtml]="city.CityName"></a> 
                </div></div> </div>           
                <md-dialog-content *ngIf="regionSvc.popUpModel" style="height: 320px;">                  
                <div class="row"> 
                <div statesContainer
                    *ngIf="!showCitys">
                <div class="col-md-3 no_pading"                     
                    *ngFor="let states_chunk of regionSvc.popUpModel.state_UT"> 
                <div class="col-md-12" style="padding: 5px 15px;"
                    *ngFor="let state of states_chunk"> 
                  <a href="#" [innerHtml]="state.CityName"   
                     (click)="state.hasCity && getCity(state)"></a>  
                </div> </div> </div>
                <div citysContainer
                    *ngIf="showCitys"
                    [@enterAnimation]>
                <div class="col-md-3 no_pading"     
                    *ngFor="let citys of citys_chunk"> 
                <div class="col-md-12" style="padding: 5px 15px;" 
                    *ngFor="let city of citys"> 
                <a href="#" [innerHtml]="city.CityName" 
                   (click)="selectCity(city)"></a> 
                </div></div> </div> </div> </md-dialog-content> `,
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        )
    ],
})
export class country_ModalComponent {
    private citys_chunk: stateModel[];
    private showCitys: boolean = false;
    private suggestions: selected_cityModel[] = [];

    constructor(
        private regionSvc: regionFunction,
        private dialogRef: MdDialogRef<any>) { }

    getCity(model: CityModel) {
        this.showCitys = true;
        this.citys_chunk = this.regionSvc.findCity(model);
    }

    selectCity(model: stateModel) {
        if (model.Id === 0) {
            this.showCitys = false;
            return;
        }

        this.regionSvc.set_selectedCity(model);
        this.dialogRef.close();
    }

    findSuggestion(srchTxt: string) {
        if (!srchTxt) {
            this.suggestions = [];
            return;
        }

        this.suggestions = this.regionSvc.findSuggestion(srchTxt);
    }

    onSelectCity(model: selected_cityModel) {
        this.regionSvc.selected_city = {
            Id: model.Id,
            CityName: model.CityName,
            StateName: model.StateName
        };
        this.dialogRef.close();
    }

}


@Component({
    templateUrl: '/templates/modal/adsCategory.html'
})
export class adsCategory_ModalComponent {
    private categorysList: any = [];
    private colorCode = [
        '#E65B0A',
        '#6A5DD4',
        '#AB6DE4',
        '#D676DC',
        '#3AE65F',
        '#e8cd39',
        '#DC9E34',
        '#E4607F',
        '#0a5bc4',
        '#dc572e',
        '#00ABA9',
        '#f7322e'
    ];
    private selectedCategory: any = {};

    constructor(
        homeSvc: homeService,
        private dialogRef: MdDialogRef<any>) {

        homeSvc.get_AllCategory()
            .subscribe(
            (data: any) => this.categorysList = data.result,
            (error: any) => console.log(error)
            );
    }

    onSelect_adCategory(
        categoryModel: any,
        categoryLevel: number) {
        if (categoryLevel === 1) {
            this.selectedCategory.sceond_categoryInfo = categoryModel;
            this.selectedCategory.third_categoryInfo = {};
        }
        else if (categoryLevel === 2) {
            this.selectedCategory.third_categoryInfo = categoryModel;

            if (!categoryModel.categorys_3.length)
                this.closeModal();
        }
        else  // for final selection
            this.closeModal(categoryModel);
    }

    private closeModal(selectdCategory?: any) {       // selectdCategory is optional
        var model = {
            category_1: this.get_categoryModel(this.selectedCategory.sceond_categoryInfo),
            category_2: this.get_categoryModel(this.selectedCategory.third_categoryInfo),    // if selectdCategory is exist then it will pas otherwise 2nd param wil pas
            category_3: selectdCategory && this.get_categoryModel(selectdCategory)
        };

        // extending object 
        Object.assign(model.category_2,
            {
                icon_name: this.selectedCategory.third_categoryInfo.icon_name
            });

        this.dialogRef.close(model);
    }

    private get_categoryModel(category: any) {
        return ({
            Id: category.Id,
            name: category.category_name
        });
    }

}

