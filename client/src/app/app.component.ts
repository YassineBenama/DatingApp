import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/User';
import { AccountService } from './_Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'the dating App';
  users : any;
  constructor(private accountService : AccountService){

  }

  SetCurrentUser()
  {
    const user : User = JSON.parse(localStorage.getItem('User'));
    this.accountService.SetCurrentUser(user);
  }
  ngOnInit(){
    this.SetCurrentUser();
  }

 
}
