import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators'
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts:Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.onFetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    //NEED TO SUBSCRIBE FOR ALL REQUESTS!!!!! OR IT WILL NOT SEND
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPost().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => this.error = error.message);
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(res => {
      this.loadedPosts = [];
    })
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  // onCreatePost(postData: Post) {
  //   // Send Http request
  //   //NEED TO SUBSCRIBE FOR ALL REQUESTS!!!!! OR IT WILL NOT SEND
  //   this.http.post<{name: string}>("https://angulardemo-919f5-default-rtdb.firebaseio.com/posts.json",postData).subscribe(res => {
  //     console.log(res);
  //   })
  // }

  // onFetchPosts() {
  //   // Send Http request
  //   this.http.get("https://angulardemo-919f5-default-rtdb.firebaseio.com/posts.json").pipe(map((resp: {[key:string]: Post}) => {
  //     const postsArray: Post[] = [];
  //     for(const key in resp) {
  //       if(resp.hasOwnProperty(key)){
  //         postsArray.push({...resp[key], id: key});
  //       }
  //     }
  //     return postsArray;
  //   })).subscribe(posts => {
  //     console.log(posts)
  //   })
  // }

  //this is a better way of setting type for the data, notice on the get method has generics on it (available on all req types too)
  // onFetchPosts() {
  //   // Send Http request
  //   this.isFetching = true;
  //   this.http.get<{[key:string]:Post}>("https://angulardemo-919f5-default-rtdb.firebaseio.com/posts.json").pipe(map(resp => {
  //     const postsArray: Post[] = [];
  //     for(const key in resp) {
  //       if(resp.hasOwnProperty(key)){
  //         postsArray.push({...resp[key], id: key});
  //       }
  //     }
  //     return postsArray;
  //   })).subscribe(posts => {
  //     this.isFetching = false;
  //     this.loadedPosts = posts;
  //   })
  // }

}
