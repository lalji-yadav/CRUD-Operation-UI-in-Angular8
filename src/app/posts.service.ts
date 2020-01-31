import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createAndStorePost( taskName: string) {
    const postData: Post = { taskName };
    this.http.post('http://localhost:3000/tasks',
    postData ).subscribe (responseData => {
      console.log(responseData);
    });
  }

  fetchPost() {
   return this.http.get('http://localhost:3000/tasks')
    .pipe(
      map( responseData => {
        const postsArray = [];
        for (const key in responseData ) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key  });
          }
        }
        return postsArray;
      })
    );
  }

  onDelete() {
   return this.http.delete('http://localhost:3000/tasks');
  }

  deleteByid(obj: object) {
    return this.http.delete('http://localhost:3000/tasks/' + obj._id);
  }
}
