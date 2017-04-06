import { Component, NgZone, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Opportunity } from '../domain/opportunity.model';
import { Pipe, PipeTransform } from '@angular/core';
import { OpportunityListService } from './opportunity.service';
import 'rxjs/add/operator/toPromise';
import { DataTableDirective } from 'angular-datatables';
import { NotificationModalComponent } from '../modal/notification-modal.component';
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
  opportunities: Opportunity[];
  myOpp: Opportunity[];
  dtOptions: any = {};
  dtOptions2: any = {};
  private myOpportunitiesURL = 'workforce/opportunities';
  private otherOpportunitiesURL = 'workforce/opportunities/other';

  constructor(
    private zone: NgZone, 
    private http: Http, 
    private opportunityListService: OpportunityListService,
    private viewContainerRef: ViewContainerRef
  ) { }

  getOpportunities(){
    var id: number = 1;
    this.opportunityListService.getOwnedOpportunities(id).subscribe(
                       myOpp => this.myOpp = myOpp,
                       error =>  this.errorMessage = <any>error);
  }
  bindModal() {
    
  }

  initDatatable(): void {
    var id: number = 1;
    const url = `${this.myOpportunitiesURL}/${id}`;
    const otherUrl = `${this.otherOpportunitiesURL}/${id}`;
    this.dtOptions2 = {
      ajax: {
        type: 'GET',
        url: url,
        dataSrc: '',
      },
      lengthChange: false,
      filter:false,
      columns: [{
        title: 'Project Name',
        data: 'opportunityName'
      }, {
        title: 'Market Circle',
        data: 'marketCircle.marketCircleName'
      }, {
        title: 'Status',
        data: 'opportunityStatus'
      }, {
        title: 'Date Modified',
        data: 'projectStartDate'
      }, {
        title: '',
        data: 'projectId',
        render: function (data) {
          return '<div class="text-center"><div class="btn-group"><button id="stupid" (click)="notificationModal.show()" class="btn btn-sm btn-default margin-right-5" type="button"><span class="padding-right-5 glyphicon glyphicon-eye-open" aria-hidden="true"></span>View Details</button>' +
            '<button class="btn btn-sm btn-primary margin-right-5" type="button"><span class="padding-right-5 glyphicon glyphicon-refresh"></span>Update</button>' +
            '</div></div>'
        }
      }
      ],
      columnDefs: [
        { targets: 0, width: '25%' },
        { targets: 1, width: '25%' },
        { targets: 2, width: '10%' },
        { targets: 3, width: '15%' },
        { targets: 4, width: '25%', sortable: false, }],
      drawCallBack: function(settings) {
          $("stupid").bind('click', () => {
            this.notificationModal.show();
          });
      }
    }


    this.dtOptions = {
      ajax: {
        type: 'GET',
        url: otherUrl,
        dataSrc: ''
      },
      lengthChange: false,
      filter:false,
      columns: [{
        title: 'Project Name',
        data: 'opportunityName'
      }, {
        title: 'Market Circle',
        data: 'marketCircle.marketCircleName'
      }, {
        title: 'Status',
        data: 'opportunityStatus'
      }, {
        title: 'Date Modified',
        data: 'projectStartDate'
      }, {
        title: ''
      }
      ],
      columnDefs: [
        { targets: 0, width: '25%' },
        { targets: 1, width: '25%' },
        { targets: 2, width: '10%' },
        { targets: 3, width: '15%' },
        {
          targets: 4, width: '25%', sortable: false, defaultContent:
          '<div class="text-center"><div class="btn-group"><button (click)="onView($event)" class="btn btn-sm btn-default margin-right-5" type="button"><span class="padding-right-5 glyphicon glyphicon-eye-open" aria-hidden="true"></span>View Details</button>' +
          '<button class="btn btn-sm btn-primary margin-right-5" type="button"><span class="padding-right-5 glyphicon glyphicon-refresh"></span>Update</button>' +
          '<button class="btn btn-sm btn-danger margin-right-5" type="button"><span class="padding-right-5 glyphicon glyphicon-trash"></span>Delete</button></div></div>'
        }
      ]
    };
  }
  ngOnInit(): void {
    this.initDatatable();
    //this.getOpportunities();
    // ,
    //  rowCallback: (nRow: number, aData: any, iDisplayIndex: number, iDisplayIndexFull: number) => {
    //  const self = this;
    // Unbind first in order to avoid any duplicate handler
    // (see https://github.com/l-lin/angular-datatables/issues/87)
    //   $('td', nRow).unbind('click');
    //   $('td', nRow).bind('click', () => {
    //     self.someClickHandler(aData);
    //   });
    //   return nRow;
    // }

  }

  //  opportunities:  Opportunity[];
  //  selectedOpportunity: Opportunity;

  //dtOptions: any = {};

  // constructor(private opportunityListService: OpportunityListService) { }
  // constructor( @Inject(Http) private http: Http) { }
  // getOpportunities(): void {
  //      this.opportunityListService.getOpportunities().then(opportunities => this.opportunities = opportunities);

  // }
  //   ngOnInit(): void {
  // this.getOpportunities();
  //    this.dtOptions = this.http.get('app/dashboard/stupid.json')
  //  .toPromise()
  //    .then(response => response.json())
  //  .catch(this.handleError);
  //  };

  //  private handleError(error: any): Promise<any> {
  //  console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

}