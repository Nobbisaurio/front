import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "@pages/company/service/company.service";
import {ListCompany} from "@pages/company/models/list-company";
import {ListStudents} from "@pages/students/models/list-students";
import {StudentsService} from "@pages/students/service/students.service";
import {AuthService} from "@app/auth/servicies/auth.service";
import {mergeMap, tap} from "rxjs";
import {ToastrService} from "@shared/services/toastr.service";

@Component({
  selector: 'app-assignament-student',
  templateUrl: './assignament-student.component.html',
  styleUrls: ['./assignament-student.component.scss']
})
export class AssignamentStudentComponent implements OnInit {
  formAssigmentStudent: FormGroup;
  companies: ListCompany[] = [];
  students: ListStudents[] = [];
  studentsSelected: ListStudents[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private studentService: StudentsService,
    private authService: AuthService,
    private toastService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.formAssigmentStudent = this.formBuilder.group({
      idCompany: [0, [Validators.required]],
    });
    this.loadData();
  }

  loadData() {
    this.studentsSelected = [];
    this.studentService.getStudentsToAssign(this.authService.currentUserValue.tutor.career.id)
      .pipe(
        tap((students) => {
          this.students = students;
        }),
        mergeMap(() => this.companyService.getListCompany(this.authService.currentUserValue.tutor.career.id)),
      ).subscribe((companies) => {
      this.companies = companies.results;
    })
  }

  saveAssigment() {
    const idStudents = this.studentsSelected.map((student) => student.id);
    this.studentService.putAssignStudents(this.formAssigmentStudent.value.idCompany, idStudents)
      .subscribe(() => {
        this.toastService.showSuccess('Se asigno correctamente');
        this.loadData();
      })
  }

}
