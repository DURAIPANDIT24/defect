import { Component, OnInit } from '@angular/core';
import { DefectService } from './defect.service';

@Component({
  selector: 'app-create-defect',
  templateUrl: './create-defect.component.html',
  styleUrls: ['./create-defect.component.css']
})
export class CreateDefectComponent implements OnInit {

  constructor( private defectService : DefectService ) { }

  ngOnInit(): void {
  }
  onAddDefect(postDefect: any){
    this.defectService.addDefect(postDefect.value.title,postDefect.value.description)
    postDefect.resetForm();
   }
}
