import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgfooter',
  templateUrl: './cgfooter.component.html',
  styleUrls: ['./cgfooter.component.scss']
})
export class CgfooterComponent implements OnInit {
  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
