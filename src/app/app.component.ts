import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';
import { poll } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PollCreateComponent,
    CommonModule,
    PollComponent,
    PollVoteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showForm = false;
  activePoll: poll | null = null;
  polls: poll[] = [
    {
      id: 1,
      question: 'Do you like dogs or cats?',
      result: [0, 5, 4, 32, 3],
      options: ['Cat', 'dog', 'None'],
      voted: true,
      thumbnails:
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      question: 'Do you like dogs or cats?',
      result: [0, 5, 4, 32, 3],
      options: ['Cat', 'dog', 'None'],
      voted: false,
      thumbnails:
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  setActivePoll(poll: poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 200);
  }
}
