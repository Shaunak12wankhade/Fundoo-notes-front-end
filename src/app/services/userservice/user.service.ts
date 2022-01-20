import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpService: HttpService) { }

  userRegister( data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('user/userSignUp',data, false, header)
  }

  userSignin( data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('user/login', data, false, header )
  }

  userforgotemail( data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   return this.httpService.postService('user/reset', data, false, header )
  }

  userforgotpassword( data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
      return  this.httpService.postService('user/reset-password' , data, false, header )
  }
}
