import {ActivatedRoute,Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PageComponent } from './page/page.component';
export const appRoutes:Routes=[
    {path:'ourService',component:ThirdComponent},
    {path:'About',component:SecondComponent },
    {path:'AddCar',component:FirstComponent },
    {path:'Home',component:PageComponent },
    {path:'**',redirectTo: 'Home' }
];