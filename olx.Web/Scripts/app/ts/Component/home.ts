import { Component, Inject } from '@angular/core';

import { modalService } from '../Services/modalService';

@Component({
    // template bind with <home>'template would be display here'</home>
    // but if don't use selector then  <ng-component>'template would be display here'</ng-component>
    selector: 'home',
    templateUrl: '/templates/views/home.html',
})
export class homeComponent {
}


@Component({
    selector: 'main',
    template: `<div class="row">                                          
               <div class="panel" style="padding: 20px 10px 20px 25px;"> 
               <div class="row"> <select-location></select-location>     
               <search:prodct></search:prodct>                           
               </div> </div> </div>                                      
               <div class="row"> <homeCategorys></homeCategorys> 
               <input type="button" value="click Me" (click)="onSelect_adsCategory()" /></div> `
})
export class mainComponent {
    constructor(private modalSvc: modalService) { }

    onSelect_adsCategory() {
        this.modalSvc.get_adsCategoryModal();
    }
}
