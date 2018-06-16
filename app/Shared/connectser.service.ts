import { Injectable,OnInit} from '@angular/core';

import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { timer } from 'rxjs/observable/timer';

import {
     Response,
    RequestOptions,
    RequestOptionsArgs,Http,
    Headers,RequestMethod, ResponseType
  } from '@angular/http';
  import { jquery,json} from 'jquery/dist/jquery.min.js';
  
  import { Car,Posts } from './Car';

  
  import { Observable } from 'rxjs/observable';
  import  'rxjs/add/operator/map';
  //import 'rxjs/add/operator/';

  import 'rxjs/add/operator/catch';

  import 'rxjs/add/operator/toPromise';
  
  @Injectable()
export class ConnectserService {
    
   public  s:string='hahaha';
   cars:Car[];
  
    constructor(private http: Http,private http1:HttpClient) {
     
  
    }
    
 apu(){
  console.log('kkkkkkkkkhhhhhh'+this.cars)

  
  return this.http1.get<Car[]>('http://localhost:61974/Cars/Index')
  .map((x:Car[])=> {return x }).subscribe((x=> {return this.cars=x}));
}

trimm(c: string|string[]) {
  if (typeof c === 'string') {
      return c.trim();
  }
}

  }
  





  


