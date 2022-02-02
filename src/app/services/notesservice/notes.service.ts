import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor( private httpService: HttpService ) {
    this.token=localStorage.getItem("token")  // this token is taken from backend that is generated & stored in our local storage after we signin & we are setting this token in our signin.ts as localstorage.setitems  
   }

   usercreatenotes(data:any){

    let header = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/addNotes', data, true,header)  // here data written in () is coming from  my .ts file
   }

   usergetallnotes(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
   return this.httpService.getService('notes/getNotesList', true,header )
   }

   userupdatenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/updateNotes',data,true,header)
   }

   userdeletenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/trashNotes',data,true,header)

   }

   userarchivenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/archiveNotes',data,true,header)
   }

   
   usergettrashnoteslist(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
   return this.httpService.getService('notes/getTrashNotesList',true,header )
   }
}
