export interface poll{
  id:number;
  question:string;
  result:number[];
  options:string[];
  thumbnails:string;
  voted:boolean;
}
export interface Voter{
  id:string;
  voted:number[];
}
