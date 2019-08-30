import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rao Info Tech Admin';
  loggedIn: boolean = false;
  loggedInUser: any;

  constructor(private cdRef: ChangeDetectorRef, private router: Router, public auth: LoginService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem("users"));
    this.cdRef.detectChanges();
    if (this.loggedInUser) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  Logout() {
    localStorage.removeItem("users");
    this.loggedIn = false;
  }
}