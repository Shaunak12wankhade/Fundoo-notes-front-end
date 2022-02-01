import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { SigninComponent } from './Components/signin/signin.component';
// import { UpdateComponent } from './Components/update/update.component';

const routes: Routes = [ 
  { path:'register',component:RegistrationComponent},
  { path:'signin',component:SigninComponent},
  { path:'forgotemail',component:ForgotemailComponent},
  { path:'resetpassword/:token',component:ForgotpasswordComponent},
  { path:'dashboard',component:DashboardComponent, 
  
     
    children:[
     { path:'', redirectTo:"/dashboard/getallnotes", pathMatch:'full' },
     { path:'getallnotes',component:GetallnotesComponent}    // inside getallnotes we have given the selector of createnotes and display notes thats why below here we commented out the path of create notes & displaynotes
    ]}, 
  // { path:'update',component:UpdateComponent},


  // { path:'createnotes',component:CreatenotesComponent},
     { path:'icons',component:IconsComponent},
  // { path:'displaynotes',component:DisplaynotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
