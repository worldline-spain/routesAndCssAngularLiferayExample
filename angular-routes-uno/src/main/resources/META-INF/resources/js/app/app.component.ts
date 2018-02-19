import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app',
	templateUrl: '/o/angular-routes-uno/js/app/app.html'
})
export class AppComponent {

	constructor(
		private router: Router
	) {
		// Default component route to load
		router.navigate(['home'], { skipLocationChange: true })
	 }
}