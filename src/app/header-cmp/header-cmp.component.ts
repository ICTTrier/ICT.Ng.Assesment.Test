import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MatDialog,MatDialogRef} from '@angular/material';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
@Component({
  selector: 'header-cmp',
  templateUrl: './header-cmp.component.html',
  styleUrls: ['./header-cmp.component.css']
})
export class HeaderCmpComponent implements OnInit {
  @Output() refreshButtonClicked = new EventEmitter<any>();
  
  @Input() parentExchangeList:{}[];
  
  constructor(public dialog: MatDialog ) {
    
   
   }

  ngOnInit() {
  }
  openDialog(){

    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
    });
    dialogRef.componentInstance.parentExchangeList=this.parentExchangeList;
}
openRemoveDialog(){
  const dialogRef = this.dialog.open(RemoveDialogComponent, {
    width: '250px',
  });
  dialogRef.componentInstance.parentExchangeList=this.parentExchangeList;
}
}
