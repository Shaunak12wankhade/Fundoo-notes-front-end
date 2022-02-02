import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() notecard:any;
  dataservice: any;
 
  constructor(private note: NotesService) { }

  ngOnInit(): void {
  }

  deletenote(){

    let reqdata= {
      
      noteIdList: [this.notecard.id],  //this notecard is coming from display.html - <app-icons & this noteIdlist is taken as a assumption by ourselves for taking id of notes
      isDeleted: true,  // it is coming from backend 
    }
    this.note.userdeletenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is deleted");
      
      console.log(response)

      this.dataservice.sendData(response)  // this is coming from data service.ts used for unrelated data sharing
    })
  }
  
  Archivenote(){

    let reqdata={
      
      noteIdList: [this.notecard.id],
      isArchived:true,  // it is coming from backend api
    }
    this.note.userarchivenotes(reqdata).subscribe((response:any) =>{
      console.log("Note is archived");

      console.log(response);
      
      
    })
  }
}
