import { HttpClient, withInterceptors } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { loadingInterceptor } from './loading-interceptor';


@Injectable({
  providedIn: 'root',

})
export class Clim {

  constructor(private http:HttpClient){}

  getclimate(){
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m',{timeout:3000,});
  }
  
}
