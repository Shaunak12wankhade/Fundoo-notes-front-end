import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrationComponent } from './Components/registration/registration.component';
import { SigninComponent } from './Components/signin/signin.component';

import {MatFormFieldModule} from '@angular/material/form-field';  //its is a parent module for input module, mat label, mat buttons, mat checkbox etc etc.... 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      //its a parent module for form control, form builder
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';    // used to connect with backend URL
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatListModule} from '@angular/material/list';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';

import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './Components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';

import {MatMenuModule} from '@angular/material/menu';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { SearchnotePipe } from './pipe/searchnote.pipe';

import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    ForgotemailComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    IconsComponent,
    GetallnotesComponent,
    DisplaynotesComponent,
    UpdateComponent,
    TrashnotesComponent,
    ArchivenotesComponent,
    SearchnotePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatDatepickerModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
