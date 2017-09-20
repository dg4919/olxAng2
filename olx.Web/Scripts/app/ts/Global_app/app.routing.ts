import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// from main directory > from Ts find path
import { mainComponent } from '../Component/home';    // Use '../' to move out from directory
import { adpostingComponent } from '../Component/adPosting'

const appRoutes: Routes = [
    {
        path: 'Home',       // no need to provide '/' as prefix in rote string,
        component: mainComponent
    },
    {
        path: 'adPosting',       // no need to provide '/' as prefix in rote string,
        component: adpostingComponent
    },
    {
        path: '**',  // otherwise route.
        component: mainComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
