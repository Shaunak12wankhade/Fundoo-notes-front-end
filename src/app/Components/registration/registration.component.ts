import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {

    this.registerForm =this.formBuilder.group({
      firstName:['',Validators.required], //this firstName name in .ts file and the formcontrolname in .html file should be exactly same
      lastName:['', Validators.required],
      userName:['', [ Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6)]],
      service:['advance', Validators.required],
      confirm:['', Validators.required],
    })
  }
  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //   return;

        if(this.registerForm.valid)
        {
          console.log(this.registerForm.value);
          
          let payload={    //this payload is a json object
            firstName:this.registerForm.value.firstName, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
            lastName:this.registerForm.value.lastName,
            email:this.registerForm.value.userName,
            password:this.registerForm.value.password,
            service:this.registerForm.value.service
            // confirm:this.registerForm.value.confirm,



          }
          this.user.userRegister(payload).subscribe((response:any)=>{    //subscribe is a method from observable
            console.log(response)
          })
        } else{
          console.log("enter data");
        }
      }

      // // display form values on success
      //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    // onReset() {
    //     this.submitted = false;
    //     this.registerForm.reset();
    // }


  


