import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter = 0
  name = ''

  constructor() { }

  clickCount() {
    this.clickCounter += 1;
  }

  ngOnInit() {
  }

}
