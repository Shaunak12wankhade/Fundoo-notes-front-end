import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  trashNotes:any;
  
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getalltrashnotes();
  }

  getalltrashnotes(){
    this.note.usergettrashnoteslist().subscribe((response:any) =>{
      console.log(response.data.data);

      this.trashNotes = response.data.data
      this.trashNotes.reverse()
      
      
    })
  }
}
