import { Component, Inject } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { modalService } from '../Services/modalService';

import { adPosting_Model } from '../Model/adPosting'

import { adPosting_Function } from '../Functions/adPostingFunction';

@Component({
    moduleId: module.id,
    selector: 'ad-posting-form',
    templateUrl: '/templates/views/adPosting.html'   
})
export class adpostingComponent {
    adPost_Model: adPosting_Model = new adPosting_Model();

    constructor(
        private fb: FormBuilder,
        private modalSvc: modalService,
        private adPosting_Fn: adPosting_Function)
    {
        this.adPost_Model.title = 'this is title of my ad';
    }

    submitForm(formModel: any) {
        // this.adPost_form.value;
        // this.adPost_form.reset;
        //if (this.adPost_form.valid)
        //    alert('form is validated !');
        //else
        //    this.validateAllFormFields(this.adPost_form);
    }

    showAads_CategoryModal() {
        this.modalSvc.get_adsCategoryModal()
            .subscribe(modalResponse => {
                if (modalResponse) {
                    this.adPosting_Fn.selected_adCategory_model = modalResponse;    // shared variable
                }
            });
    }

    validate(fieldName: string) {
        return this.adPosting_Fn.bindControl(
            this.adPosting_Fn.selected_adCategory_model,
            fieldName);
    }

}