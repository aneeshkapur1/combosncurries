import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant3',
  templateUrl: './restaurant3.component.html',
  styleUrls: ['./restaurant3.component.scss']
})
export class Restaurant3Component implements OnInit {
  subscribeData : any = <any>[];

  constructor() { }

  ngOnInit() {
  }

}
