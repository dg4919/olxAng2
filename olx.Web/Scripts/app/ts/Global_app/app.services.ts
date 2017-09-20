// all filters, services will be register here :)

// filter is our services which inject in decalration part like component
import {
    stringFilter,
    SortPipe
} from '../Shared/filters';

export const _filters = [   // register filter to use in app globally with HTML page
    stringFilter,
    SortPipe
];

// services
import { authService } from '../Services/authService';
import { httpService } from '../Shared/httpService';
import { modalService } from '../Services/modalService';
import { regionFunction } from '../Functions/regionFunction';
import { adPosting_Function } from '../Functions/adPostingFunction';

export const shared_services = [
    httpService,
    authService,
    
];

// Global Services going here
import { homeService } from '../Services/homeService';

export const app_services = [
    homeService,
    modalService,
    regionFunction,
    adPosting_Function
];
