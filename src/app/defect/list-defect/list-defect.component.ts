import { Component, OnInit } from '@angular/core';
import { DefectService } from '../create-defect/defect.service';

@Component({
  selector: 'app-list-defect',
  templateUrl: './list-defect.component.html',
  styleUrls: ['./list-defect.component.css']
})
export class ListDefectComponent implements OnInit {
  defects:any[]=[]
  constructor(private defectService: DefectService) { }

  ngOnInit(): void {
   let defectList= this.defectService.getDefects()
   console.log("defectList----",defectList)
   this.defects=defectList;
  }
  deleteDefect(title:any){
        this.defects=this.defects.filter(element=>
          element.title !== title)
        }
}
