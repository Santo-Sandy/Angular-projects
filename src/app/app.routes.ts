import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { PostDemoComponent } from './post-demo/post-demo';
import { Climate } from './climate/climate';
import { SupplyChain } from './supply-chain/supply-chain';

export const routes: Routes = [
    {
        path:'form',
        loadComponent:()=>import('./form/form').then(m=>m.Form),
        title:'Form',
        children:[{
            path:'nav',
            component:Nav,
            title:'Navigation',
        }]
    },{
        path:'post-demo',
        component:PostDemoComponent,
        title:'Home',
    },{
        path:'climate',
        component:Climate,
    },{
        path:'',
        component:SupplyChain,
    }
];
