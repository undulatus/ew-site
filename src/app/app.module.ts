import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';

import { LocalStorageModule } from 'angular-2-local-storage';

import { routing } from './app.routing';

import { AlertModule } from 'ng2-bootstrap';

import { AuthGuard, AuthenticationService, LoginComponent } from './guard/index';
import { UserService } from './user/index';
import { DashboardComponent } from './dashboard/index';
import { WorksheetComponent } from './worksheet/index';
import { ActivityBreakdownComponent } from './worksheet/index';
import { ActivitySummaryComponent } from './worksheet/index';

import { GlobalEventsService } from "./utils/index";

import { MainNavBarComponent } from './ui/index';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ProfileDropdownComponent } from "./ui/index";

import { NotificationModalComponent } from './modal/index';
import { DeleteModalComponent } from './modal/index';
import { AddActivityModalComponent } from './modal/index';
import { EditResourceModalComponent } from './modal/index';
import { MyDatePickerModule } from 'mydatepicker';

// used to create fake backend
import { fakeBackendProvider } from './utils/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { WaveComponent } from 'ng2-spin-kit/app/spinner/wave';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WorksheetComponent,
    NotificationModalComponent,
    DeleteModalComponent,
    AddActivityModalComponent,
    EditResourceModalComponent,
    ActivityBreakdownComponent,
    ActivitySummaryComponent,
    WaveComponent,
    MainNavBarComponent,
    ProfileDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    DataTablesModule,
    MyDatePickerModule,
    ModalModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'ew-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    GlobalEventsService,

    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
