import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalDirective, ModalOptions } from 'ng2-bootstrap/modal';

@Component({
    moduleId: module.id,
    selector: 'edit-resource-modal',
    templateUrl: 'edit-resource-modal.html',
    styleUrls: ['./edit-resource-modal.component.css']
})
export class EditResourceModalComponent implements OnInit {
    resourceRoles = ['Manager', 'Developer', 'BA'];
    resourceTechnologies = ['Iterative', 'Java'];
    resourcePayLevels = ['PM', 'SE5', 'SE4', 'SE3', 'SE2', 'SE1'];

    @ViewChild('resourceModal') public editResourceModal: ModalDirective;

    @ViewChild('resourceRole') resourceRole;
    @ViewChild('resourceTechnology') resourceTechnology;
    @ViewChild('resourcePayLevel') resourcePayLevel;
    @ViewChild('resourceBillable') resourceBillable;

    confirmAction() {
        console.log(this.resourceRole.nativeElement.value);
        console.log(this.resourceTechnology.nativeElement.value);
        console.log(this.resourcePayLevel.nativeElement.value);
        console.log(this.resourceBillable.nativeElement.value);
    }

    removeEmptyValue(el) {
        if (el.children[0].value == 0) el.children[0].remove();
    }

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
        this.editResourceModal.show();
    }
    hide() {
        this.editResourceModal.hide();
    }
    cancelAction() {
        this.editResourceModal.hide();
    }
    ngOnInit() {
        this.editResourceModal.config = this.notifOptions;
    }
}