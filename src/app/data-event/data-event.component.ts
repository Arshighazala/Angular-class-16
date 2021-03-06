import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-event',
  templateUrl: './data-event.component.html',
  styleUrls: ['./data-event.component.scss']
})
export class DataEventComponent implements OnInit {

  private title = 'Display Data and Event handling';
  // imgSrc = 'assets/images/dinesh.jpg';
  dummyImageSrc = 'https://dummyimage.com/300x200/e640e6/fff';
  tableTitle = 'Attribute binding sample';
  colSpan = 2;
  rowSpan = 2;
  constructor() { }

  ngOnInit() {
  }
  get titleVal() {
    // return this.title.toUpperCase();
    return this.title.toUpperCase().italics();
  }

}
