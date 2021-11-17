import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from 'src/_Models/User';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURl = "https://localhost:5001/api/";
  private currentUser =  new ReplaySubject<User>(1);
  currentUser$ = this.currentUser.asObservable();
  constructor(private http : HttpClient) { }

  login(model : any){

    return this.http.post(this.baseURl +'account/login',model).pipe(
      map((response : User) => {
        const user = response ;
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.SetCurrentUser(user);
        }
      })
    );
  }

  register(model :any)
  {
    return this.http.post(this.baseURl +'account/register',model).pipe(
      map((user: User)  => {
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.next(user);
        }
      }));
  }

  SetCurrentUser(user : User)
  {
    this.currentUser.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser.next(null);

  }
}