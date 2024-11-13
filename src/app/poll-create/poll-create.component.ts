import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-poll-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './poll-create.component.html',
  styleUrl: './poll-create.component.scss',
})
export class PollCreateComponent {
  pollForm: FormGroup;
  constructor(private fb:FormBuilder){
    this.pollForm = this.fb.group({
      question:this.fb.control('',[Validators.required]),
      image:this.fb.control(''),
      op1:this.fb.control(''),
      op2:this.fb.control(''),
      op3:this.fb.control(''),
    })
  }
  submitForm(){
    console.log(this.pollForm.value);
  }
}
