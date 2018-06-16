import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { environment } from '../environments/environment';


//import { HttpClient} from '@angular/common/http';

import {HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';



import  { appRoutes }  from './routs'


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ConnectserService } from './Shared/connectser.service';
//import { connect } from 'tls';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    
    HttpModule,
    HttpClientModule,
    

    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ConnectserService,HttpClientModule,
    HttpModule,
    ],
    exports : [SecondComponent,ThirdComponent,FirstComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
