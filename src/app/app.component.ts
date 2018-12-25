import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6project';
  userName: any = '';
  password: any = '';
  cpassword: any = '';

  constructor(private http: HttpClient){
//     this.http.post("https://jsonplaceholder.typicode.com/posts",
//     {
//         "title": "Customer004",
//         "body": "customer",
//         "userId": 1
//     })
//     .subscribe(
//         data => {
//             console.log("POST Request is successful ", data);
//         },
//         error => {
//             console.log("Error", error);
//         }
//     );  
//   }
  
  this.http.post("http://localhost:8000/users/register",
  {
      "username": "name11",
      "email": "email1@gmal.com",
      "password": 'password11'
  })
  .subscribe(
      data => {
          console.log("POST2 Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
  );  
}


}
