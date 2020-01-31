import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   loadedPosts: Post[] = [];

//   constructor(private http: HttpClient, private postService: PostsService) {}

//   ngOnInit() {
//     this.postService.fetchPost().subscribe( posts => {
//       this.loadedPosts = posts;
//     });
//   }

//   onCreatePost(postData: { taskName: string; }) {
//   this.postService.createAndStorePost(postData.taskName);
//   }

//   onFetchPosts() {
//     this.postService.fetchPost().subscribe(posts => {
//       this.loadedPosts = posts;
//     });
//   }

//   Delete() {
//     this.postService.onDelete().subscribe(posts => {
//       this.loadedPosts = [];
//     });
//   }

//   deleteByid(obj) {
//     this.postService.deleteByid(obj).subscribe();
//   }

//  // updateByid(obj, index) {
// //   console.log('obj', obj);
// //  }
// }

constructor() {}

ngOnInit() {}

}
