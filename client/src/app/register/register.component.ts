import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent : any;
  @Output() CancelRegister = new EventEmitter();
  model : any ={};
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(response =>
      {
        console.log(response);
        this.cancel();
      }, error=> {
        console.log("error")
      })
  }

  cancel()
  {
    this.CancelRegister.emit(true);
    console.log('cancelled');
  }
}
