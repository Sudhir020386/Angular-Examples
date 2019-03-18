import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  price: number;
  myObject: any;
  today: Date;
  constructor() { }

  ngOnInit() {
    this.message = 'hELLO WorLd';
    this.price = 25.3;
    this.myObject = [{ x: 10, y: 20}];
    this.today = new Date();
  }

}
