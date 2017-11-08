import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { httpService } from '../Shared/httpService';
import { globalConfig } from '../Shared/constants';

@Injectable()           // use to emit Metadata of service
export class userService {
    private apiUrl: string;

    constructor(private httpSvc: httpService) {
        this.apiUrl = globalConfig.apiEndPoint + globalConfig.version.Site;
    }
                                           
    getUser_shippingAdress () {
        let url = `${this.apiUrl}/Order/get_shipping_Address_byUserId`;
        return this.httpSvc.Get(url);
    }

}