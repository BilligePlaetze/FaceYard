import { Comment } from "./comment";
import {WinzelGraps} from "./winzelGraps";
import {WinzelHashTags} from "./hashTags";

export class Post {
    id : number;
    winzelTitle : string;
    winzelText : string;
    winzelLocation : string;
    winzelGraps : WinzelGraps[];
    winzelHashTags : WinzelHashTags[];
    winzelUpvotes : number;
    winzelDate : string; 
    winzelAuthor : string; 
    winzelComments : Comment[];
    winzelImage : string;
}
