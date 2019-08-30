import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor( private router: Router){

	}

	canActivate(): boolean{
		if(JSON.parse(localStorage.getItem("users"))){
			return true;
		}else{
			this.router.navigate(['/login'])
			return false;
		}
	}
}