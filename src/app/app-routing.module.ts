import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { hasRole } from './auth/guards/has-role.guard';
import { NoAuthGuard } from './auth/guards/no-auth.guard';
import { rolEnum } from '@core/enum/rol.enum';
import { AuthGuard } from '@app/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'permissions',
        canActivate: [hasRole([rolEnum.ADMIN])],
        loadChildren: () =>
          import('./pages/permissions/permissions.module').then(
            (m) => m.PermissionsModule
          ),
      },
      {
        path: 'roles',
        canActivate: [hasRole([rolEnum.ADMIN])],
        loadChildren: () =>
          import('./pages/roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: 'students',
        canActivate: [
          hasRole([
            rolEnum.ADMIN,
            rolEnum.CA,
            rolEnum.CE,
            rolEnum.TA,
            rolEnum.TE,
          ]),
        ],
        loadChildren: () =>
          import('./pages/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'users',
        canActivate: [hasRole([rolEnum.ADMIN, rolEnum.CA, rolEnum.CE])],
        loadChildren: () =>
          import('./pages/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'company',
        canActivate: [hasRole([rolEnum.ADMIN, rolEnum.CA, rolEnum.CE])],
        loadChildren: () =>
          import('./pages/company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'tutor',
        canActivate: [hasRole([rolEnum.ADMIN, rolEnum.CA, rolEnum.CE])],
        loadChildren: () =>
          import('./pages/tutor/tutor.module').then((m) => m.TutorModule),
      },
      {
        path: 'career',
        canActivate: [hasRole([rolEnum.ADMIN, rolEnum.EST])],
        loadChildren: () =>
          import('./pages/career/career.module').then((m) => m.CareerModule),
      },
      {
        path: 'projects',
        canActivate: [
          hasRole([
            rolEnum.ADMIN,
            rolEnum.EST,
            rolEnum.CA,
            rolEnum.CE,
            rolEnum.TA,
            rolEnum.TE,
          ]),
        ],
        loadChildren: () =>
          import('./pages/project/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'reports',
        canActivate: [hasRole([rolEnum.ADMIN, rolEnum.CA])],
        loadChildren: () =>
          import('./pages/reports/reports.module').then((m) => m.ReportsModule),
      },

      {
        path: 'agreement',
        canActivate: [hasRole([rolEnum.ADMIN, rolEnum.CA, rolEnum.CE])],
        loadChildren: () =>
          import('./pages/agreement/agreement.module').then(
            (m) => m.AgreementModule
          ),
      },
      // students documents
      {
        path: 'student-files',
        canActivate: [hasRole([rolEnum.EST])],
        loadChildren: () =>
          import('./pages/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
