import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LoginPopupComponent>) { }

  ngOnInit() {

  }
  cancel(){

    this.dialogRef.close(true);

  }

}
