import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/_Models/User';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any ={};
  currentUSer : Observable<User>;
  constructor(private accountService : AccountService, private router:Router,
    private toastr :ToastrService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.currentUSer = this.accountService.currentUser$;
  }

  login()
  {
      this.accountService.login(this.model).subscribe(response => 
        {
        console.log(response);
        this.router.navigateByUrl('/members');
        }
        );
  }
  
  getCurrentUser()
  {
    this.accountService.currentUser$.subscribe(user=>
      {
       // this.loggedIn = !!user;
       this.router.navigateByUrl('/');
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
