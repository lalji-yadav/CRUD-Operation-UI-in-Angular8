import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  _id: string;
  data: object;
  products = [];
  productObj: object = {};
  // private headers = new HttpHeaders( {'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute ) { }

  updatePost(taskName) {

        console.log(taskName);
        this.http.patch('http://localhost:3000/tasks/' + this.data._id, this.data).subscribe((res) => {

         console.log(res);
       }, (err) => {
         console.log(err);
      });
  }


  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    console.log(this._id);

    this.http.get('http://localhost:3000/tasks/' + this._id ).subscribe((res) => {

      const taskData = res;
      this.data = taskData;
      console.log(res);
    }, (err) => {
      console.log(err);
    });

 }
}
