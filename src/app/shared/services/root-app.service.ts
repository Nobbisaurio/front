import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RootAppService {
  readonly dashboardPath = '/dashboard';
  readonly authPath = '/auth';
  readonly loginPath = this.authPath + '/login';
  readonly forgetPasswordPath = this.authPath + '/forget-password'; //http://localhost:4200/auth/forget-password
  readonly permissionPath = '/permissions';
  readonly rolePath = '/roles';
  readonly studentsPath = '/students';
  readonly studentsAssigmentPath = this.studentsPath + '/assigment';
  readonly studentsAssigmentProject = this.studentsPath + '/project';

  readonly usersPath = '/users';
  readonly changePasswordPath = this.usersPath + '/change-password';
  readonly companyPath = '/company';
  readonly tutorPath = '/tutor';
  readonly careerPath = '/career';
  readonly agreementPath = '/agreement';
  readonly projectsPath = '/projects';
  readonly reportsPath = '/reports';
  readonly projectsAssigmentPath = this.projectsPath + '/assigment';


  constructor(
    private router: Router,
  ) {
  }

  redirectDashboard() {
    this.router.navigate([this.dashboardPath]);
  }

  redirectLogin() {
    this.router.navigate([this.loginPath]);
  }

  redirectForgetPassword() {
    this.router.navigate([this.forgetPasswordPath]);
  }

  redirectStudents() {
    this.router.navigate([this.studentsPath]);
  }

  redirectUsers() {
    this.router.navigate([this.usersPath]);
  }

  redirectCompanies() {
    this.router.navigate([this.companyPath]);
  }

  redirectTutor() {
    this.router.navigate([this.tutorPath]);
  }

  redirectCareer() {
    this.router.navigate([this.careerPath]);
  }

  redirectAgreement() {
    this.router.navigate([this.agreementPath]);
  }

  redirectProjects() {
    this.router.navigate([this.projectsPath]);
  }


  redirectReports() {
    this.router.navigate([this.reportsPath]);
  }
}
