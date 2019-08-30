import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	totalRequest: any = [];
	constructor() {
	}
	message: any;
	ngOnInit() {
	}

}