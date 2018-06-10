import { Comment } from "./comment";

export class Post {
    id : number;
    winzelTitle : string;
    winzelText : string;
    winzelLocation : string;
    winzelGraps : string[];
    winzelHashTags : string[];
    winzelUpvotes : number;
    winzelDate : string; 
    winzelAuthor : string; 
    winzelComments : Comment[];
}
