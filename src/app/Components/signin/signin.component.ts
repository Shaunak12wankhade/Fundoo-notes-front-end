import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  submitted = false;
  
  constructor( private formBuilder: FormBuilder, private user:UserService, private route: Router) { }

  ngOnInit(): void {

    this.signinForm =this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    })
  }
  // convenience getter for easy access to form fields
  // get f() { return this. signinForm.controls;}

  // signin(){
  //   if(this.signinForm.valid) {
  //     console.log(this.signinForm)

  //   }
  //   // else{
  //   //   console.log("form is invalid");
  //   //   return;
  //   // }
  // }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
      //   if (this. signinForm.invalid) {
      //     return;
      // }

      if(this.signinForm.valid) {
        console.log(this.signinForm.value);

        let signinobject={
          email:this.signinForm.value.email,
          password:this.signinForm.value.password
        }
         this.user.userSignin(signinobject).subscribe((response:any)=> {
           console.log(response);

           localStorage.setItem('token', response.id)  // we are setting this token here so that we can acces this token for all the notes components and operations after we signin. 
          //  if(response.success == true)
          //  {
          //    this.route.navigateByUrl('dashboard/getallnotes')
          //  }
          })
  
      } else{
        console.log("enter data");
      }

      // // display form values on success
      //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this. signinForm.value, null, 4));
    }

    // onReset() {
    //     this.submitted = false;
    //     this. signinForm.reset();
    // }


  }


