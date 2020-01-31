import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.postService.fetchPost().subscribe( posts => {
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: { taskName: string; }) {
  this.postService.createAndStorePost(postData.taskName);
  }

  onFetchPosts() {
    this.postService.fetchPost().subscribe(posts => {
      this.loadedPosts = posts;
    });
  }

  Delete() {
    this.postService.onDelete().subscribe(posts => {
      this.loadedPosts = [];
    });
  }

  deleteByid(obj) {
    this.postService.deleteByid(obj).subscribe();
  }

 // updateByid(obj, index) {
//   console.log('obj', obj);
//  }
}
