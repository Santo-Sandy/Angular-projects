import { Component } from '@angular/core';
import { Clim } from '../clim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-climate',
  imports: [CommonModule],
  templateUrl: './climate.html',
  styleUrl: './climate.css',
})
export class Climate {

  data: any;
  dats: any;

  constructor(private climService: Clim) {}

  ngOnInit(): void {
    this.Getclimate();
  }

  Getclimate(){
   this.climService.getclimate().subscribe(res=>{
    next: this.dats = res.status;
    next: this.data = res.body;
   });
  }

}
