import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { config } from './config';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}
	
	constructor(private http: HttpClient) {

	}


	authorize(detail) {
		return this.http.post(config.baseApiUrl + "admin/admin-login", detail)
	}

	sendToken(detail: string) {
		localStorage.setItem("users", detail)
	}
	getToken() {
		return localStorage.getItem("users")
	}
	isLoggednIn() {
		return this.getToken() !== null;
	}
}
