import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgheader',
  templateUrl: './cgheader.component.html',
  styleUrls: ['./cgheader.component.scss']
})
export class CgheaderComponent implements OnInit {
  selectedLink: string = 'home';

  constructor() { }

  ngOnInit() {
  }

  linkClick(newValue: string): void {
    this.selectedLink = newValue;
  }
}
