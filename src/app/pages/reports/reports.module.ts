import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ReportsRoutingModule } from './reports-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListReportsComponent } from './components/list-reports/list-reports.component';
import { TutorReportComponent } from './components/tutor-report/tutor-report.component';
import { CompanyReportComponent } from './components/company-report/company-report.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    ListReportsComponent,
    CompanyReportComponent,
    TutorReportComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CascadeSelectModule,
    
    DropdownModule,
    RippleModule,
  ],

  exports: [],
})
export class ReportsModule {}
