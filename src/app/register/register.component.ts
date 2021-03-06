import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from './../_Services/auth-service';
import { AlertifyService } from './../_Services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() ValuesFromHome: any
  @Output() cancelRegister = new EventEmitter
  ();
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    
  ) {}

  ngOnInit(): void {}

 
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('registration successful');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
