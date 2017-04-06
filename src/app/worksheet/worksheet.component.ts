import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { Opportunity } from '../domain/opportunity.model';
import { MarketCircle } from '../domain/market-circle.model';
import { MarketCircleService } from '../services/market-circle.service';
import { ServiceLine } from '../domain/service-line.model';
import { ServiceLineService } from '../services/service-line.service';

@Component({
    moduleId: module.id,
    templateUrl: 'worksheet.component.html',
    styleUrls: ['./worksheet.component.css'],
    providers: [MarketCircleService, ServiceLineService]
})

export class WorksheetComponent implements OnInit {
    @Input() maxProjDuration: string;
    errorMessage: string;
    opportunity: Opportunity;
    marketCircles: MarketCircle[];
    serviceLines: ServiceLine[];

    versions = ['v.1', 'v.2', 'v.3'];

    // @ViewChild('projectName') projectName;
    // @ViewChild('scheduleGranularity') scheduleGranularity;
    // @ViewChild('marketCircle') marketCircle;
    @ViewChild('projectDuration') projectDuration;
    // @ViewChild('serviceLine') serviceLine;
    // // @ViewChild('projectStartDate') projectStartDate;
    // @ViewChild('projectStatus') projectStatus;

    constructor(
        private marketCircleService: MarketCircleService,
        private serviceLineService: ServiceLineService
    ) { }

    ngOnInit() {
        this.opportunity = new Opportunity();
        this.getOpportunityElements();
        this.getOpportunityElementz();
    }

    createOpportunity() {
        // console.log(this.projectName.nativeElement.value);
        // console.log(this.scheduleGranularity.nativeElement.value);
        // console.log(this.marketCircle.nativeElement.value);
        // console.log(this.projectDuration.nativeElement.value);
        // console.log(this.serviceLine.nativeElement.value);
        // // console.log(this.projectStartDate.nativeElement.value);
        // console.log(this.projectStatus.nativeElement.value);

        console.log('-----------------------------');
        console.log(this.opportunity);
    }

    validateDuration() {
        console.log('------------ duration: ', this.projectDuration.nativeElement.value, ' ------------ (user should not be able to input numbers more than the speicified max)');
    }

    getOpportunityElements() {
        this.marketCircleService.getMarketCircles().then(marketCircles=>{
            this.marketCircles = marketCircles;
            console.log("getOpportunityElements getMarketCircles marketCircles: ", marketCircles);
        }).catch(error => this.errorMessage = <any>error);

        // this.serviceLineService.getServiceLines().then(serviceLines=>{
        //     this.serviceLines = serviceLines;
        //     console.log("getOpportunityElements getServiceLines serviceLines: ", serviceLines);
        // }).catch(error => this.errorMessage = <any>error);
    }

    getOpportunityElementz() {
        // this.marketCircleService.getMarketCircles().then(marketCircles=>{
        //     this.marketCircles = marketCircles;
        //     console.log("getOpportunityElements getMarketCircles marketCircles: ", marketCircles);
        // }).catch(error => this.errorMessage = <any>error);

        this.serviceLineService.getServiceLines().then(serviceLines=>{
            this.serviceLines = serviceLines;
            console.log("getOpportunityElements getServiceLines serviceLines: ", serviceLines);
        }).catch(error => this.errorMessage = <any>error);
    }

     removeFirstOption(el) {
        el.children[0].remove();
    }
    
    resetDuration() {
        this.projectDuration.nativeElement.value = "";
    }

    // https://github.com/kekeh/mydatepicker
    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'mm-dd-yyyy',
    };

    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

}
