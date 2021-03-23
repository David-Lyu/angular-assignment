import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn: "root"})
export class PostService {

  error = new Subject<string>();


  constructor(private http: HttpClient){};

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http.post<{name: string}>("https://angulardemo-919f5-default-rtdb.firebaseio.com/posts.json",postData, {
    // can do response, events(need an rxjs tap for response), etc. Will get error if you type it wrong
    //get full http body response now with the observe
    //for more info on events look at sect 18: 270: about 5min:12s
    observe: 'body',
    //responseType: text, blob, etc
    responseType: 'json'
    }).subscribe(res => {
      console.log(res);
    }, err=> {
      this.error.next(err.msg);
    })
  }

  fetchPost() {
    //mult params HttpParams is immutable so have to keep re assigning it
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custon', 'key');
    //headers are the last parameter of the http method. Using this config. Also works in other http methods
    return this.http.get<{[key:string]:Post}>("https://angulardemo-919f5-default-rtdb.firebaseio.com/posts.json", {
      headers: new HttpHeaders({
        'Custom-Header': "hello"
      }),
      //query parameters
      params: new HttpParams().set('print', 'pretty')
    }).pipe(map(resp => {
      const postsArray: Post[] = [];
      for(const key in resp) {
        if(resp.hasOwnProperty(key)){
          postsArray.push({...resp[key], id: key});
        }
      }
      return postsArray;
    }),
    catchError(errorRes=> {
      //send to analytics server. Not necceseraily for the UI but logging
      return throwError(errorRes);
    }))
  }

  deletePosts() {
    return this.http.delete('https://angulardemo-919f5-default-rtdb.firebaseio.com/posts.json')
  }
}
