import { Component } from '@angular/core';
// import { WorksheetComponent } from './worksheet/worksheet.component';
import { MarketCircleService } from './services/market-circle.service';
import { HttpModule } from '@angular/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	// styleUrls: ['./app.component.css']

	// directives: [WorksheetComponent],
	providers: [MarketCircleService, HttpModule]

})
export class AppComponent {
	title = 'e-Stimation Worksheet';

	constructor() {

	}
}