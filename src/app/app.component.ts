import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs-compat/Rx';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(){
  }
  favState = true;
  title = 'app';
  favchange(){
  }
}
