import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl= 'http://fundoonotes.incubation.bridgelabz.com/api/'
  constructor( private http :HttpClient) { }

  postService(url:any, data:any, token:boolean=false, httpOptions:any){
   
   return this.http.post(this.baseurl+url, data, token && httpOptions)
  }
}
