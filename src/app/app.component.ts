import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';
import { poll, PollForm, PollVote } from './types';
import { PollService } from './poll-services/poll.service';
import { Observable } from 'rxjs';

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
  polls: Observable<poll[]>;
  constructor(private ps: PollService) {
    this.polls = this.ps.getPolls();
  }

  setActivePoll(poll: poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 200);
  }
  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll);
  }
  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
