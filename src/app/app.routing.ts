import { Routes, RouterModule } from '@angular/router';
 
import { DashboardComponent } from './dashboard/index';
import { WorksheetComponent } from './worksheet/index';
import { AuthGuard, LoginComponent } from './guard/index';
 
const appRoutes: Routes = [
    { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'worksheet', component: WorksheetComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
 
export const routing = RouterModule.forRoot(appRoutes);