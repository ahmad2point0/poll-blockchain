export interface poll{
  id:number;
  question:string;
  result:number[];
  options:string[];
  thumbnails:string;
}
export interface Voter{
  id:string;
  voted:number[];
}
