import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTopnavbarComponent } from './admin-topnavbar/admin-topnavbar.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidenavComponent,
    UsersListComponent,
    AdminDashboardComponent,
    AdminTopnavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
