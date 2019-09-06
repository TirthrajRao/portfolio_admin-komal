import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import {AlertService} from '../alert.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService, private router: Router, private recaptchaV3Service: ReCaptchaV3Service,public _alertService:AlertService) { }

	submitted = false;

	registerForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required)
	});
	msg: string = null;
	message: any;
	errmsg: string = null;
	loading = false;

	user = {
		email: '',
		password: ''
	}
	ngOnInit() {

	}

	handleCaptcha(event) {
		console.log('EVENT =======================>', event);
		this.registerForm.controls.recaptcha.setValue(event);
	}

	/**
	 * Login User
	 * @param {Object} detail 
	 */
	login(detail) {
		this.recaptchaV3Service.execute('importantAction')
			.subscribe((token) => {
				detail['g-recaptcha-response'] = token;
				this.loading = true;
				this.loginService.authorize(detail).subscribe((res: any) => {
					localStorage.setItem('users', JSON.stringify(res.data.data));
					localStorage.setItem('token', JSON.stringify(res.data.token));
					this.msg = 'Logged in successfully! ';
					this._alertService.successAlert(this.msg);
					this
					this.router.navigate(['/dashboard']);
				}, err => {
					console.log('error', err);
					this.errmsg = 'Incorrect info!';
					this.loading = false;
					this._alertService.failurAlert();
				})
			});

	}
}
