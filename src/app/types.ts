export interface poll extends PollForm{
  id: number;
  result: number[];
  voted: boolean;
}

export interface PollForm {
  question: string;
  options: string[];
  thumbnails: string;
}

export interface PollVote{
  id:number;
  vote:number;
}
export interface Voter {
  id: string;
  voted: number[];
}
