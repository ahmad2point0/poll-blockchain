import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PollForm } from '../types';
@Component({
  selector: 'app-poll-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './poll-create.component.html',
  styleUrl: './poll-create.component.scss',
})
export class PollCreateComponent {
  pollForm: FormGroup;

  @Output() pollCreate: EventEmitter<PollForm> = new EventEmitter();

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
    const formData:PollForm={
      question: this.pollForm.get("question")?.value,
      thumbnails: this.pollForm.get("image")?.value,
      options:[
        this.pollForm.get("op1")?.value,
        this.pollForm.get("op2")?.value,
        this.pollForm.get("op3")?.value
      ]
    }
    this.pollCreate.emit(formData);
  }
}
