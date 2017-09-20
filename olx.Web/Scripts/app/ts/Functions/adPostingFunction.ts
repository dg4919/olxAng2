import { Injectable } from '@angular/core';

import {
    adform_Array
} from '../Model/adPosting'

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class adPosting_Function {
    private adPost: adform_Array = {
        price: [1, 2, 3],
        vehicle_kmsDriven: [68, 69, 110, 111],
        vehicle_model: [68, 110, 111],
        vehicle_year: [68, 69, 110, 111],
        vehicle_fuel: [68],
        vehicleGroup: [3, 4],
        realStateGroup: [12],
        realState_furnished: [223, 224, 247, 222, 248, 246, 249, 252],
        realState_bhk: [223, 247, 222, 248, 246, 249, 252],
        realState_sqrFt: [223, 247, 222, 248, 246, 249, 226, 251, 252],
        realState_sqrYard: [225, 250]
    };

    selected_adCategory_model: any;

    constructor(private fb: FormBuilder){}

    // model contain the type of ad user is selected of ad category :)
    // fieldName > which column would be show/hide acording to selected ad category
    bindControl(
        model: any,
        fieldName: string): boolean {

        // var can not use inside class but can use in method..
        var result = false;

        switch (fieldName) {
            case 'vehicleForm_group':
                if (this.adPost.vehicleGroup.indexOf(model.category_1.Id) > -1)
                    result = true
                break;
            case 'vehicle_kmsDriven':
                if (this.adPost.vehicle_kmsDriven.indexOf(model.category_2.Id) > -1)
                    result = true
                break;
            case 'vehicle_model':
                if (this.adPost.vehicle_model.indexOf(model.category_2.Id) > -1)
                    result = true
                break;
            case 'vehicle_year':
                if (this.adPost.vehicle_year.indexOf(model.category_2.Id) > -1)
                    result = true
                break;
            case 'vehicle_fuel':
                if (this.adPost.vehicle_fuel.indexOf(model.category_2.Id) > -1)
                    result = true
                break;
            case 'realStateGroup':
                if (this.adPost.realStateGroup.indexOf(model.category_1.Id) > -1)
                    result = true
                break;
            case 'realState_furnished':
                if (this.adPost.realState_furnished.indexOf(model.category_3.Id) > -1)
                    result = true
                break;
            case 'realState_bhk':
                if (this.adPost.realState_bhk.indexOf(model.category_3.Id) > -1)
                    result = true
                break;
            case 'realState_sqrFt':
                if (this.adPost.realState_sqrFt.indexOf(model.category_3.Id) > -1)
                    result = true
                break;
            case 'realState_sqrYard':
                if (this.adPost.realState_sqrYard.indexOf(model.category_3.Id) > -1)
                    result = true
                break;
        }

        return result;
    }

}