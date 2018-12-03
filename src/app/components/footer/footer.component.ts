import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  date: Date;
  year: number;

  constructor() { }

  ngOnInit() {
    this.date = new Date(),
    this.year = this.date.getFullYear();
  }

}
