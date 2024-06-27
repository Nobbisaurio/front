
import {environment} from "@environments/environment";


export class RouterApi {

  static readonly urlBase = environment.urlBase;
  static readonly urlAuth = this.urlBase + '/auth';
  static readonly urlPermissions = this.urlBase + '/permissions';
  static readonly urlRoles = this.urlBase + '/role';
  static readonly urlStudents = this.urlBase + '/students';
  static readonly urlUsers = this.urlBase + '/user';
  static readonly urlCareer = this.urlBase + '/career';
  static readonly urlCompany = this.urlBase + '/company';
  static readonly urlTutor = this.urlBase + '/tutor';
  static readonly urlAgreement = this.urlBase + '/agreement';
  static readonly urlUploadFile = this.urlBase + '/upload-files';
  static readonly urlProjects = this.urlBase + '/project';
  static readonly urlReports = this.urlBase + '/report';
  // documents
  static readonly urlDocuments = this.urlBase + '/documents'


  static readonly urlRoleActive = this.urlRoles + '/active';
  static readonly urlAllStudents = this.urlStudents + '/all';
  static readonly urlStudentsByCompany = this.urlStudents + '/byCompany/';
  static readonly urlStudentsActive = this.urlStudents + '/active';
  static readonly urlStudentsUpload = this.urlStudents + '/upload';
  static readonly urlStudentsToAssign = this.urlStudents + '/toAssign/';
  static readonly urlStudentsToAssignToCompany = this.urlStudents + '/assign-students-to-company';
  static readonly urlStudentsCompany = this.urlStudents + '/assign-to-company';
  static readonly urlStudentsToProject = this.urlStudents + '/assign-to-project';
  static readonly urlStudentsWithoutProjects = this.urlStudents + '/withNullProject/';
  static readonly urlStudentsToAssignToProject = this.urlStudents + '/assign-students-to-project';

  static readonly urlUsersActive = this.urlUsers + '/active';
  static readonly urlUsersByRole = this.urlUsers + '/byRole/';

  static readonly urlCareerActive = this.urlCareer + '/active';

  static readonly urlCompanyProfile = this.urlCompany + '/getCompanyInfo';

  static readonly urlTutorAcademic = this.urlTutor + '/academic/';
  static readonly urlTutorAcademicActive = this.urlTutorAcademic + 'active/';

  static readonly urlTutorBusiness = this.urlTutor + '/business';
  static readonly urlTutorBusinessActive = this.urlTutorBusiness + '/active/';

  static readonly urlAgreementActive = this.urlAgreement + '/active';
  static readonly urlAgreementProfile = this.urlAgreement + '/id';
  static readonly urlAgreementNotificate = this.urlAgreement + '/notificate/';

  static readonly urlDownFile = this.urlUploadFile + '/download';

  static readonly urlProjectsActive = this.urlProjects + '/active/';
  static readonly urlProjectsByCareer = this.urlProjects + '/active/career/';
  static readonly urlProjectsToAssign = this.urlProjects + '/toAssign/';
  static readonly urlProjectToAssignToBusinessTutor = this.urlProjects + '/assign-business-tutor';
  static readonly urlProjectToAssignToAcademicTutor = this.urlProjects + '/assign-academic-tutor';
  static readonly urlProjectToAssignToStudents = this.urlProjects + '/assign-students';
  static readonly urlStudentsUnassign = this.urlStudents + '/unassign-to-project/';
  static readonly urlReportByAcademicTutor = this.urlReports + '/byAcademicTutor/';
  static readonly urlReportByCompany = this.urlReports + '/byCompany/';

}

