import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import { PollVoteComponent } from "./poll-vote/poll-vote.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PollCreateComponent, CommonModule, PollComponent, PollVoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showForm = false;

  polls = [
    {
    question: 'Do you like dogs or cats?',
    votes: [0, 5, 4, 32, 3],
    voted: true,
    image:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
    {
    question: 'Do you like dogs or cats?',
    votes: [0, 5, 4, 32, 3],
    voted: false,
    image:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
    {
    question: 'Do you like dogs or cats?',
    votes: [0, 5, 4, 32, 3],
    voted: true,
    image:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
    {
    question: 'Do you like dogs or cats?',
    votes: [0, 5, 4, 32, 3],
    voted: false,
    image:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];
}
