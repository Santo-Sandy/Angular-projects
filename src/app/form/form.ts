import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, InjectionToken, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Data } from '../data';
import { ɵEmptyOutletComponent, RouterOutlet, RouterLink } from "@angular/router";
import { Highlight } from '../highlight';
import { Nav } from '../nav/nav';

export interface AppConfig{
  apiUrl:string;
  version:string;
  features:Record<string,boolean>;
}

const Config=new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory:()=>({
    apiUrl:'https://api.example.com',
    version:'1.0.0',
    features:{
      Darkmode:true,
      analytics:false,
    }
    })
});

@Component({
  selector: 'app-form',
  imports: [CommonModule,Highlight,ReactiveFormsModule ,FormsModule, ɵEmptyOutletComponent, RouterOutlet,Nav,RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  private formbuilder=inject(FormBuilder);

  form=this.formbuilder.group({
    name:['',Validators.required],
    email:[''],
  });
  config=inject(Config);
  data:string="";
  show:boolean=false;
  datas=inject(Data);

   @Input() names: string[] = ["Alice", "Bob", "Charlie"];

Show: boolean=false ;
color: string='';

onsubmit(form:any){
  console.log("Form submitted! ",form.value.name," ",form.value.email);
}

a:string='';


  name: string = "";
  @Output() nameslist=new EventEmitter<string>();

  addnames() {
    console.log("Name submitted: " + this.name);
    this.nameslist.emit(this.name);
    this.datas.add(this.name);
    this.name="";
    
  }


}
