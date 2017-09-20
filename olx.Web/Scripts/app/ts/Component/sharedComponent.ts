//  this path contains Partial components / Directives

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { FormControl, FormBuilder } from '@angular/forms';
import { ValidationService } from '../Services/validationService';

import { homeService } from '../Services/homeService';
import { modalService } from '../Services/modalService';
import { regionFunction } from '../Functions/regionFunction'

import { adPosting_Function } from '../Functions/adPostingFunction';

@Component({
    // dont use ':' = (book:info) > coz its bind only right part.. So use [book-info OR book_info]
    selector: 'header',
    template: `<div class="row">
                <nav class="navbar navbar-inverse customNav">
                    <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                        </button>
                    <a class="navbar-brand" href="#">Olx Site</a> </div>
               <div class="navbar-collapse collapse in" id="myNavbar">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" title="favourites"><span class="fa fa-star fa-lg"></span></a></li>
                    <li><a href="#"><span class="fa fa-user"></span><label> Account </label></a></li>
                    <li><a href="#"><span class="fa fa-key"></span>Register</a></li>
                    <li><a href="#"><span class="fa fa-user"></span>Login</a></li>
                    <li> <div class="btn btn-group">
                            <input type="button" class="btn btn-default" value="Post a free Ad">
                    </div> </li></ul></div></div></nav></div>`,
})
export class headerComponent { }

@Component({
    selector: 'select-location',
    template: `<div class="col-md-3 col-sm-4 col-xs-12 mrgBtm_8">
                         <i class="fa fa-map-marker pos_abs alignItm" 
                            title="Select your City"                  
                            (click)="get_countryModal()"             
                            style="font-size: 1.3em;"></i>            
                            <i class="fa fa-close pos_abs alignClose" 
                            title="Remove Selected City"></i>        
                         <div class="form-control1 txtIndent25"       
                              style="font-size: 1.0em; padding: 7px;" 
                              (click)="get_countryModal()">          
                         <span *ngIf="!regionSvc.selected_city"                 
                               style="color: #b4b4b4;">               
                               All India </span>                      
                         <p *ngIf="regionSvc.selected_city" class="locationLabel">
                            <span>{{ regionSvc.selected_city.CityName }}{{ regionSvc.selected_city.StateName && ', '}}</span>
                            <small style="color: #b4b4b4;"                  
                                   [innerHtml]="regionSvc.selected_city.StateName"></small>
                          </p></div></div>                                        `,
})
export class selectLocation_Component {

    constructor(private modalSvc: modalService,
        private regionSvc: regionFunction) { }

    get_countryModal() {
        this.modalSvc.get_countryModal();
    }
}


@Component({
    selector: 'search:prodct',
    template: `<div class="col-md-7 col-sm-5 col-xs-12 mrgBtm_8">                   
               <i class="fa fa-search pos_abs alignItm" title="Search Anything"></i>
               <input type="text" class="form-control1 alignTxt txtIndent25" placeholder="What you want to search ?"></div>
               <div class="col-md-2 col-sm-3 col-xs-12 mrgBtm_8">       
               <button class="btn btn-info" value="Search">             
               <i class="fa fa-search"></i> Search </button> </div> `,
})
export class searchProdct_Component { }


@Component({
    selector: 'homeCategorys',
    template: `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"                        
                    *ngFor="let category of categoryList; let $index = index"                                
                    (click)="showModel(category)">                                  
               <div class="metro_div" [style.background]="colorCode[$index]"> 
               <a href="#"> <i [class]="category.icon_name"></i>                       
                   <p class="title" [innerHtml]="category.category_name"></p>               
               </a> </div> </div> `,
})
export class homeCategorys_Component implements OnInit {
    categoryList: any = [];
    colorCode: any = [
        '#DC7A7A',
        '#e8cd39',
        '#b200ff',
        '#f37b53',
        '#61b9ff',
        '#4daf7b',
        '#D80073',
        '#dc572e',
        '#0a5bc4',
        '#FFB400',
        '#00ABA9',
        '#A4C400'
    ];

    constructor(
        private homeSvc: homeService,
        private modalSvc: modalService) { }

    ngOnInit() {
        this.homeSvc
            .get_categorys()
            .subscribe(
            (data: any) => this.categoryList = data.result,
            (error: any) => console.log(error)
            );
    }

    showModel(category: any) {
        this.modalSvc
            .get_subCategoryModal(category);
    }

}

@Component({
    selector: 'txtBox',
    template: `<div class="form-group">
                <label class="col-sm-2 control-label"
                       [innerHtml]="labelName"></label>
                <div [class]="controlClass">
                    <ng-content></ng-content>
                    <control-messages [control]="controlName"></control-messages>
                </div>
            </div>`,
    inputs: ['controlName', 'controlClass', 'labelName']
})
export class adTxtBox_Component { }

@Component({
    selector: 'control-messages',
    template: `<span class="text-danger"
                     *ngIf="errorMessage">
                 {{errorMessage}}
               </span>`
})
export class ControlMessages {
    // errorMessage: string;
    @Input() control: FormControl;
    constructor() { }

    // errorMessage is input param, its kind of property get & set
    get errorMessage() {
        // debugger;
        if (this.control) {
            for (let propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
        }
        return null;
    }

}

