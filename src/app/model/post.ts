import { Comment } from "./comment";

export class Post {
    title : string;
    text : string;
    location : string;
    grapes : string[];
    hashtags : string[];
    upvotes : number;
    date : string; 
    author : string; 
    comments : Comment[];
}
