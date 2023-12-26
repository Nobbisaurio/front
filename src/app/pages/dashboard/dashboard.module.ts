import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CardModule,
        ChartModule,
        ButtonModule,
        MenuModule,
        TableModule,
        RippleModule,

    ]
})
export class DashboardModule { }
