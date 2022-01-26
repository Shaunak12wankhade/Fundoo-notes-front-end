import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor( private httpService: HttpService ) {
    this.token=localStorage.getItem("token")  // this token is taken from backend that is generated & stored in your local storage after you signin.  
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
}
