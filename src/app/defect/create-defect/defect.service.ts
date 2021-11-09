import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefectService {
  private defects: any[] = [];

  constructor() { }

  addDefect(title:String, description:string){
    const defect = {title: title, content: description};
    this.defects.push(defect);
    console.log("this.defects----",this.defects);

  }

  getDefects() {
    return this.defects;
  }
}
