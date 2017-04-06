import { Component, OnInit, ViewChild, Input, Output, ViewContainerRef, AfterViewInit } from '@angular/core';
// import { EmployeeListService } from './employee-list.service';
// import { Employee } from './employee.model';

@Component({
    selector: 'activity-breakdown',
    templateUrl: 'activity-breakdown.component.html',
    styleUrls: ['./activity-breakdown.component.css']
    // providers: [EmployeeListService]
})

export class ActivityBreakdownComponent implements OnInit, AfterViewInit {
    activityRoles = ['Manager', 'Developer', 'BA'];
    activityTechnologies = ['Iterative', 'Java'];
    activityPayLevels = ['PM', 'SE5', 'SE4', 'SE3', 'SE2', 'SE1'];
    activityBillabilities = ['Yes', 'No'];
    
    @ViewChild('activity') activity;
    @ViewChild('activityRole') activityRole;
    @ViewChild('activityTechnology') activityTechnology;
    @ViewChild('activityPayLevel') activityPayLevel;
    @ViewChild('activityBillability') activityBillability;

    // console.log(this.activityRole.nativeElement.value);
    // console.log(this.activityTechnology.nativeElement.value);
    // console.log(this.activityPayLevel.nativeElement.value);
    // console.log(this.activityBillability.nativeElement.value);

    removeEmptyValue(el) {
        if (el.children[0].value == 0) el.children[0].remove();
    }

    // private employees: Employee[];
    constructor(
        //     private employeeListService: EmployeeListService
        private viewContainerRef: ViewContainerRef
    ) { }

    private body: String;
    private category: String;

    @Input() projectDuration: number;
    @Input() scheduleGranularity: number;

    dtActivityBreakdownOptions: any = {};
    ngOnInit(): void {
        this.dtActivityBreakdownOptions = {
            paging: false,
            searching: false,
            info: false
        };
    }

    actId: any = '';
    ngAfterViewInit(): void {
        this.actId = this.activity.nativeElement.querySelector('li:nth-child(n+2)').attributes.id.nodeValue;
    }

    selectedIdx = 0;
    selectItem(index): void {
        this.selectedIdx = index;
    }

    items: any = [];
    createRange(number) {
        this.items = [];
        for (var i = 1; i <= number; i++) {
            this.items.push(i);
        }
        return this.items;
    }

    public tabs: any[] = [
        {
            id: 1,
            title: 'Requirements Engineering',
            // removable: true,
            resource: [{
                role: 'Project Manager',
                technology: 'Iterative',
                paylevel: 'PM',
                billable: 'Yes',
                period: [0.2, 1.0]
                // period: [{
                //     period1: 0.2,
                //     period2: 1.0,
                //     period3: 0
                // }]
            }, {
                role: 'Developer',
                technology: 'Iterative',
                paylevel: 'SE4',
                billable: 'No',
                period: [0.3, 1.0, 0.7]
                // period: [{
                //     period1: 0,
                //     period2: 1.0,
                //     period3: 0.2
                // }]
            }]
        }, {
            id: 2,
            title: 'Application Management',
            // removable: true,
            resource: [{
                role: 'QA',
                technology: 'Iterative',
                paylevel: 'SE3',
                billable: 'No',
                period: [0.4, 1.0, 0.8, 0.6]
                // period: [{
                //     period1: 0,
                //     period2: 1.0,
                //     period3: 0.2
                // }]
            }, {
                role: 'BA',
                technology: 'Iterative',
                paylevel: 'SE2',
                billable: 'Yes',
                period: [0.5, 1.0, 0.9]
                // period: [{
                //     period1: 0.2,
                //     period2: 1.0,
                //     period3: 0
                // }]
            }]
        }
    ];

}