import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';
import { Employee } from './employee.model';
@Component({
    selector: 'activity-breakdown',
    templateUrl: 'activity-breakdown.component.html',
    styleUrls: ['./activity-breakdown.component.css'],
    providers: [EmployeeListService]
})

export class ActivityBreakdownComponent implements OnInit {
    private employees: Employee[];

    dtOptions: any = {};
    constructor(private employeeListService: EmployeeListService) { }

    ngOnInit(): void {
        this.createTabs();
        this.dtOptions = {
            // displayLength: 2,
            paging: false,
            searching: false,
            info: false,
            columnDefs: [
                { targets: 0, width: '15%' },
                { targets: 1, width: '10%' },
                { targets: 2, width: '10%' },
                { targets: 3, width: '10%' },
                { targets: 4, visible: true },
                { targets: 5, visible: true },
                { targets: 6, visible: true }
            ]
        };
    }

    createTabs() {
        var tabs: any[] = [];
         this.employeeListService.findAll().then(employees => this.employees = employees);
         for (let employee of this.employees) {
           var tab =  {
            title: 'Requirements Engineering',
            customClass: '',
            removable: true,
            content: {
                a: employee.firstname,
                b: employee.lastname,
                c: "CCC"
            }
        }
             tabs.push(tab);
         }
         console.log("items: ", tabs);
         return tabs;
     }

    public tabs: any[] = this.createTabs();

}
