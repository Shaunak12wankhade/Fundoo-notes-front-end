import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  createnotesForm!: FormGroup;
    // submitted = false;

  writenote: boolean=false;
  

  constructor(  private formBuilder: FormBuilder, private note: NotesService ) { }

  ngOnInit(): void {
    this.createnotesForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]

    });
  }
 
  takeanote() {
    console.log(this.writenote);
    return this.writenote === true ? (this.writenote = false) : (this.writenote = true);
    // this.writenote=true;

  }
  onSubmit() {
    // this.writenote = true;

    
    if (this.createnotesForm.valid) {
        console.log(this.createnotesForm.value)

        let createnote= {
          title:this.createnotesForm.value.title,
          description:this.createnotesForm.value.description
        }
        this.note.usercreatenotes(createnote).subscribe((response:any) => {
          console.log(response);
        })

    } else{
      console.log("enter data");
    }

    // // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createnotesForm.value, null, 4));
}

// onReset() {
//     this.submitted = false;
//     this.createnotesForm.reset();
// }

 
}
