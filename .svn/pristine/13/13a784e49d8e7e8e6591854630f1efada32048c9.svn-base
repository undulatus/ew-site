import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalDirective, ModalOptions } from 'ng2-bootstrap/modal';

@Component({
    moduleId: module.id,
    selector: 'add-activity-modal',
    templateUrl: 'add-activity-modal.html',
    styleUrls: ['./add-activity-modal.component.css']
})
export class AddActivityModalComponent implements OnInit {
    activityServiceLines = ['Requirement Engineering', 'Application Management', 'others'];
    // activityRoles = ['Manager', 'Developer', 'BA'];
    // activityTechnologies = ['Iterative', 'Java'];
    // activityPayLevels = ['PM', 'SE5', 'SE4', 'SE3', 'SE2', 'SE1'];

    @ViewChild('activityModal') public addActivityModal: ModalDirective;
    // activityServiceLine: String;
    // activityRole: String;
    // activityTechnology: String;
    // activityPayLevel: String;
    // activityBillable: Boolean;
    @ViewChild('activityServiceLine') activityServiceLine;
    // @ViewChild('activityRole') activityRole;
    // @ViewChild('activityTechnology') activityTechnology;
    // @ViewChild('activityPayLevel') activityPayLevel;
    // @ViewChild('activityBillable') activityBillable;

    confirmAction() {
        console.log(this.activityServiceLine.nativeElement.value);
        // console.log(this.activityRole.nativeElement.value);
        // console.log(this.activityTechnology.nativeElement.value);
        // console.log(this.activityPayLevel.nativeElement.value);
        // console.log(this.activityBillable.nativeElement.value);
    }

    // removeEmptyValue(el) {
    //     if (el.children[0].value == 0) el.children[0].remove();
    // }

    isChecked(el) {
        if(el.checked) el.value = 1
        else el.value = 0;
    }

    constructor() { }

    private notifOptions: ModalOptions = {
        backdrop: false,
        keyboard: true,
        focus: true,
        ignoreBackdropClick: true
    };
    show() {
        this.addActivityModal.show();
    }
    hide() {
        this.addActivityModal.hide();
    }
    cancelAction() {
        this.addActivityModal.hide();
    }
    ngOnInit() {
        this.addActivityModal.config = this.notifOptions;
    }
}