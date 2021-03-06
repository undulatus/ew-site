import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { Opportunity } from '../domain/opportunity.model';
import { OpportunityService } from '../services/opportunity.service';
import { OpportunityActivity } from '../domain/opportunity-activity.model';
import { Activity } from '../domain/activity.model';
import { ActivityService } from '../services/activity.service';
import { BusinessUnit } from '../domain/business-unit.model';
import { BusinessUnitService } from '../services/business-unit.service';
import { ServiceType } from '../domain/service-type.model';
import { ServiceTypeService } from '../services/service-type.service';
import { Role } from '../domain/role.model';
import { RoleService } from '../services/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'worksheet.component.html',
    styleUrls: ['./worksheet.component.css'],
    providers: [ActivityService, BusinessUnitService, ServiceTypeService, RoleService, OpportunityService]
})

export class WorksheetComponent implements OnInit {
    // @Input() maxProjDuration: string;
    @ViewChild('opportunityDuration') opportunityDuration;

    errorMessage: string;
    returnData: Opportunity;
    isServiceTypeValid: Boolean;

    opportunity: Opportunity;
    opportunities: Opportunity[];
    activity: Activity;
    opportunityActivity: OpportunityActivity;
    opportunityActivities: OpportunityActivity[];
    activities: Activity[];
    // activityServiceLine: Activity[];
    businessUnits: BusinessUnit[];
    serviceTypes: ServiceType[];
    roles: Role[];
    mode: string;

    versions = ['v.1', 'v.2', 'v.3'];

    // https://github.com/kekeh/mydatepicker
    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'mm-dd-yyyy',
    };

    constructor(
        private route: ActivatedRoute,
        private activityService: ActivityService,
        private businessUnitService: BusinessUnitService,
        private serviceTypeService: ServiceTypeService,
        private roleService: RoleService,
        private opportunityService: OpportunityService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
       console.log(params['mode']); // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
        this.opportunity = new Opportunity();
        this.opportunityActivities = new Array<OpportunityActivity>();

        this.getOpportunityElements();
        this.opportunity.durationGranularity = 'month';
        console.log("mode: ", this.mode);
    }

    addActivityId(activityId: number) {
        this.activity = new Activity();
        this.activity.activityId = activityId;

        this.opportunityActivity = new OpportunityActivity();
        this.opportunityActivity.activity = this.activity;
        this.opportunityActivities.push(this.opportunityActivity);
    }

    createOpportunity() {
        console.log('****************************************');
        // if (this.opportunityActivities.length > 0) {
        //     this.opportunity.opportunityActivities = this.opportunityActivities;
        // }
        // console.log('opportunity: ', this.opportunity);
        // console.log('****************************************');

        // if (!this.opportunity) { return; }
        // this.opportunityService.saveOpportunity(this.opportunity)
        //     .then(
        //         // response => this.opportunities.push(opportunity),
        //         // returnData => this.returnData = returnData,
        //         error => this.errorMessage = <any>error
        //     );
    }

    getOpportunityElements() {
        this.businessUnitService.getBusinessUnit().then(businessUnits => {
            this.businessUnits = businessUnits;
        }).catch(error => this.errorMessage = <any>error);

        this.serviceTypeService.getServiceTypes().then(serviceTypes => {
            this.serviceTypes = serviceTypes;
        }).catch(error => this.errorMessage = <any>error);
    }

    getActivitiesPerServiceType(element) {
        this.activityService.getActivitiesByServiceType(element.value).then(activities => {
            this.activities = activities;
        }).catch(error => this.errorMessage = <any>error);

        this.roleService.getRolesByServiceType(element.value).then(roles => {
            this.roles = roles;
        }).catch(error => this.errorMessage = <any>error);

        if(element.value == 0) this.isServiceTypeValid = false
        else this.isServiceTypeValid = true;
    }

    validateDuration() {
        // user should not be able to input numbers more than the speicified max
        // console.log('------------ duration: ', this.projectDuration.nativeElement.value, ' ------------');
    }

    resetDuration() {
        this.opportunityDuration.nativeElement.value = "";
    }

    removeEmptyValue(el) {
        if (el.children[0].value == 0) el.children[0].remove();
    }

    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

}
