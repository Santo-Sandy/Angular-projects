import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App');
  lists: string[] = [];

  addnames(names:string){
    this.lists.push(names);

    console.log('Names received from Dashboard:', names);
  }
}
