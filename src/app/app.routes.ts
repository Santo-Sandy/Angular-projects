import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { PostDemoComponent } from './post-demo/post-demo';
import { Climate } from './climate/climate';

export const routes: Routes = [
    {
        path:'',
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
    }
];
