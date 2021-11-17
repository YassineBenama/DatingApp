import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/_Models/User';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any ={};
  currentUSer : Observable<User>;
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.currentUSer = this.accountService.currentUser$;
  }

  login()
  {
      this.accountService.login(this.model).subscribe(response => 
        {
        console.log(response);
        },error => {
          console.log("error")
                  }
        );
  }
  
  getCurrentUser()
  {
    this.accountService.currentUser$.subscribe(user=>
      {
       // this.loggedIn = !!user;
      },error=>{
        console.log("error");
      });
  }

  logout()
  {
    this.accountService.logout();
    //this.loggedIn = false;
    
  }

}
