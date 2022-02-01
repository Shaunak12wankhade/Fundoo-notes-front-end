import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist:any;  //  this notelist is called as parentmessage which is taken from getallnotes.html


  constructor( private note: NotesService) { }

  ngOnInit(): void {
    this.getallnotes()  //we are calling this below method to see it in browser in our UI
  }

  getallnotes(){

    this.note.usergetallnotes().subscribe((response:any) => {

      console.log(response.data.data)   // .data.data is used because our notes in console is fetching from data inside data
      this.notelist= response.data.data
      this.notelist.reverse()

    })
  }

}
