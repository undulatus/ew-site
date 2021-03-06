import { Component, NgZone, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Opportunity } from '../domain/opportunity.model';
import { Pipe, PipeTransform } from '@angular/core';
import { OpportunityListService } from './opportunity.service';
import 'rxjs/add/operator/toPromise';
import { DataTableDirective } from 'angular-datatables';
import { NotificationModalComponent } from '../modal/notification-modal.component';
import { Router } from '@angular/router';
declare var $: any;
import 'datatables.net';



@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  providers: [OpportunityListService]
})
export class DashboardComponent implements OnInit {
  @ViewChild('notificationModal') notificationModal: NotificationModalComponent;
  private title: String = 'Notification';
  private body: String = 'You clicked this modal!';
  private confirmLabel: String = 'Ok';
  errorMessage: string;
  opportunities: Opportunity[] = [];
  myOpportunities: Opportunity[] = [];
  dtOptions: any = {};
  dtOptions2: any = {};
  mode: string = '';
  constructor(
    private router: Router,
    private zone: NgZone, 
    private http: Http, 
    private opportunityListService: OpportunityListService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.initDatatable();
    this.getOpportunities();
  }
  createOpportunity(){
    this.mode = 'create';
    this.router.navigate(['/worksheet', this.mode]);
  }
  getOpportunities(){
    var userName: string = 'test';
    this.opportunityListService.getOwnedOpportunities(userName).then(myOpportunities =>{
      this.myOpportunities = myOpportunities;
      console.log("getOpportunityElements myOpportunities: ", myOpportunities);
    }).catch(error => this.errorMessage = <any>error);

    this.opportunityListService.getOpportunities(userName).then(opportunities =>{
      this.opportunities = opportunities;
      console.log("getOpportunityElements other opportunities: ", opportunities);
    }).catch(error => this.errorMessage = <any>error);

    
  }
  
  initDatatable(): void {
    this.dtOptions2 = {
      lengthChange: false,
      filter:false,
      columnDefs: [
        { targets: 0, sortable: true },
        { targets: 1, sortable: true },
        { targets: 2, sortable: true },
        { targets: 3, sortable: true },
        { targets: 4,  sortable: false}
      ]
    };

    this.dtOptions = {
      lengthChange: false,
      filter:false,
      columnDefs: [
        { targets: 0, sortable: true },
        { targets: 1, sortable: true },
        { targets: 2, sortable: true },
        { targets: 3, sortable: true },
        { targets: 4,  sortable: false}
      ]
    };
  }

}