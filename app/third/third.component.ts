import { Component, OnInit,NgZone } from '@angular/core';
import { ConnectserService } from '../Shared/connectser.service';
import {NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import {
  Response,
 RequestOptions,
 RequestOptionsArgs,
 Headers,RequestMethod
} from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { Observable } from 'rxjs/observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Car } from '../Shared/Car';

@Component({
  selector: 'app-third',
 
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  providers: [ConnectserService]
  
})
export class ThirdComponent implements OnInit {
cs:Car[]
  constructor(public connect1:ConnectserService,private zone:NgZone) 
  { 
   
   
     }
 
  ngOnInit() {
    this.connect1.apu();
    
   console.log(this.connect1.cars);
    var x =this.connect1.s;
 
 }
 

}
