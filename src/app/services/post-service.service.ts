import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Post } from "./../model/post";

import 'rxjs/Rx';
import { Observable } from 'rxjs';
const POST_BASE_URL = "http://winzelbackend20180610123655.azurewebsites.net/api/winzel";
@Injectable()
export class PostServiceService {
 
 constructor(private http : Http) {}
 
  getPosts(post : Post) {
    return this.http.get(POST_BASE_URL)
    .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

deletePost(post: Post): Observable<Response> {
    return this.http.delete(POST_BASE_URL)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

createPost(post : Post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(POST_BASE_URL, post, {
        headers: headers
      })
        .map(res => res.json());
}

}