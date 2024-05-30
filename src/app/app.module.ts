import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlockUIModule } from 'primeng/blockui';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '@pages/dashboard/dashboard.module';
import { ToastModule } from 'primeng/toast';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SessionInterceptor } from '@core/interceptors/session.interceptor';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { PermissionsModule } from '@pages/permissions/permissions.module';
import { SharedModule } from '@shared/shared.module';
import { RolesModule } from '@pages/roles/roles.module';
import { StudentsModule } from '@pages/students/students.module';
import { CompanyModule } from '@pages/company/company.module';
import { TutorModule } from '@pages/tutor/tutor.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CareerModule } from './pages/career/career.module';
import { ProjectsModule } from './pages/project/projects.module';
import { ReportsModule } from './pages/reports/reports.module';
import { DocumentsModule } from './pages/documents/documents.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BlockUIModule,
    SharedModule,
    DashboardModule,
    ToastModule,
    BlockUIModule,
    HttpClientModule,
    PermissionsModule,
    RolesModule,
    StudentsModule,
    CompanyModule,
    TutorModule,
    ProjectsModule,
    ReportsModule,
    DocumentsModule,

    NgxUiLoaderModule.forRoot({
      bgsColor: 'red',
      bgsOpacity: 0.5,
      bgsPosition: 'bottom-right',
      bgsSize: 60,
      bgsType: 'ball-spin-clockwise',
      blur: 7,
      delay: 0,
      fastFadeOut: true,
      fgsColor: '#e1e1e9',
      fgsPosition: 'center-center',
      fgsSize: 50,
      fgsType: 'square-jelly-box',
      gap: 24,
      logoPosition: 'center-center',
      logoSize: 120,
      logoUrl: '',
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40,40,40,0.77)',
      pbColor: '#a21d1d',
      pbDirection: 'ltr',
      pbThickness: 3,
      hasProgressBar: true,
      text: '',
      textColor: '#FFFFFF',
      textPosition: 'center-center',
      maxTime: -1,
      minTime: 300,
    }),
    CareerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
