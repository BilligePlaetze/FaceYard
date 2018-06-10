import { Comment } from "./comment";
import {WinzelGraps} from "./winzelGraps";

export class Post {
    id : number;
    winzelTitle : string;
    winzelText : string;
    winzelLocation : string;
    winzelGraps : WinzelGraps[];
    winzelHashTags : string[];
    winzelUpvotes : number;
    winzelDate : string; 
    winzelAuthor : string; 
    winzelComments : Comment[];
}
