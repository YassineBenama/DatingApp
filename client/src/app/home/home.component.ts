import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  users :any;
  registerMode  = true;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  this.GetUser();
  }

  registertoggle()
  {
    this.registerMode = !this.registerMode;
  }

  GetUser()
  {
    this.http.get("https://localhost:5001/api/users").subscribe(users =>{
      this.users = users;
      console.log(this.users);
      }, error => {
        console.log("error");
      })
  }
  cancelRegisterMode(event : boolean)
  {
    console.log(event);
    this.registerMode = event;
  }
  
}
