import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { httpService } from '../Shared/httpService';
import { globalConfig } from '../Shared/constants';

@Injectable()
export class homeService {

    private apiUrl: string;

    constructor(private httpSvc: httpService) {
        this.apiUrl = globalConfig.apiEndPoint + globalConfig.version.Site;
    }

    // by default public
    get_categorys() {
        let url = `${this.apiUrl}/Home/getCategorys`;

        return this.httpSvc.GetCache(url);
    }

    get_RegionOrCity() {
        let url = `${this.apiUrl}/Home/get_RegionOrCity`;

        return this.httpSvc.GetCache(url);
    }

    get_AllCategory() {
        let url = `${this.apiUrl}/Home/getAllCategorys`;

        return this.httpSvc.GetCache(url);
    }

}