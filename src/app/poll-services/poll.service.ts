import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}
  getPolls(): Observable<poll[]> {
    return of([
      {
        id: 1,
        question: 'Do you like dogs or cats?',
        result: [0, 5, 4],
        options: ['Cat', 'dog', 'None'],
        voted: true,
        thumbnails:
          'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        question: 'Do you like dogs or cats?',
        result: [0, 5, 4],
        options: ['Cat', 'dog', 'None'],
        voted: false,
        thumbnails:
          'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ]).pipe(delay(2000));
  }
  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }
  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
