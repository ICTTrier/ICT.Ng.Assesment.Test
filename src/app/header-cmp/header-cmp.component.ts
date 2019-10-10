import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-cmp',
  templateUrl: './header-cmp.component.html',
  styleUrls: ['./header-cmp.component.scss']
})
export class HeaderCmpComponent implements OnInit {
  @Output() refreshButtonClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
