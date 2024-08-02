import { Component, OnInit } from '@angular/core';

// import * as fs from 'fs';
import * as fs from 'file-saver';

import * as docx from 'docx';

import * as exceljs from 'exceljs';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { DocumentsService } from '../../service/service.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import { backgroundImage, logoImage } from '../../helpers/Base64Image';
import { LocalStorageService } from '../../../../core/storage/storage.service';
import { UserAuth } from '@app/core/models/user-auth';
import { DocumentProps } from '../../models/documents-Props';
import { UserStudent } from '@app/pages/students/models/user-student';
import { StudentsService } from '../../../students/service/students.service';
import { CompanyService } from '../../../company/service/company.service';
import { ProjectsService } from '@app/pages/project/service/projects.service';
import { studentList } from '@app/pages/project/models/list-projects';
import { Content } from 'pdfmake/interfaces';
import { UsersService } from '@app/pages/users/service/users.service';
import { TutorService } from '../../../tutor/service/tutor.service';
import { CareerService } from '@app/pages/career/service/career.service';

@Component({
  selector: 'app-documents-menu',
  templateUrl: './documents-menu.component.html',
  styleUrls: ['./documents-menu.component.css'],
})
export class DocumentsMenuComponent implements OnInit {
  header = 'Documentos Fase Práctica';

  constructor(
    private documentsService: DocumentsService,
    private localStorageService: LocalStorageService,
    private studentsService: StudentsService,
    private companyService:CompanyService,
    private projectsService:ProjectsService,
    private tutorService:TutorService,
    private careerService:CareerService,
    private usersService:UsersService,
  ) {}

  Namefiles: {
    label: string;
    icon: string;
    document: () => any;
  }[] = [];

  currentStudent: UserStudent;
  instituteName = 'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC'
  structuringCoreByCarrerAndLevel: string;
  currentAcademicPeriod: string;
  careerCode: string;
  studentCompanyId:number;
  studentProjectName:string;
  bussinesTutorDni :number
  academicTutorDni :number
  careerCoordinator : string
  careerCoordinatorDni : string

  getStudentsByProject (id:number){
    return  this.companyService.getCompanyProfile(id)
  }

  getProyectById(id:number) {
    return this.projectsService.getProjectsById(id)
  }
  getBussinesTutorDni(userId:number){
    return this.tutorService.getTutorByID(userId).subscribe({
      next: (res)=>{
        this.bussinesTutorDni = res.dni
        this.currentStudent.businessTutor =`${res.firstName} ${res.lastName}`
      }
    })
  }
  getAcademicTutorDni(userId:number){
    return this.tutorService.getTutorByID(userId).subscribe({
      next: (res)=>{
        this.academicTutorDni = res.dni
        this.currentStudent.academicTutor =`${res.firstName}`
      }
    })
  }
  getCoordinador(idCarrer:number){
    return this.careerService.getCareerById(idCarrer).subscribe({
      next:(res)=>{
        this.usersService.getUserById(res.idCoordinator).subscribe({
          next:({dni,tutor})=>{
            this.careerCoordinator = `${tutor.firstName}`
            this.careerCoordinatorDni = dni
          }
        })
      }
    })
  }

  projectStudentsList = (students:studentList[]):{} | Content=>{

    let i = 0
    const studentTable = students.map(student =>{
      i++
      return [
        {
          text:i,
          alignment:'center',
          fontSize:9,
        },
        {
          text:student.fullName,
          alignment:'center',
          fontSize:9,
        },
        {
          text:student.dni,
          alignment:'center',
          fontSize:9,
        },
        {
          text:student.academicPeriod,
          alignment:'center',
          fontSize:9,
        },
        {

        },
        {

        }
      ]
    })

    return studentTable

  };

  studentProjectTable:{} | Content


  setData = () => {
    const {
      student: {
        id,
        career: { code },
      },
    }: UserAuth = this.localStorageService.getItem<UserAuth>('currentUser');
    this.studentsService.getStudentProfile(Number(id)).subscribe({
      next: (student) => {
        this.currentStudent = student;
        this.currentAcademicPeriod = student.academicPeriod;
        this.careerCode = code;
        this.studentCompanyId = student.idCompany
        this.studentProjectName = student.project

        // structuring core
        this.documentsService.getAllstructuringCores().subscribe({
          next: (res) => {
            this.structuringCoreByCarrerAndLevel = res.filter((core) => {
              return (
                core.careerCode === code &&
                core.careerLevel === student.academicPeriod
              );
            })[0].coreName;
          },
        });

        this.getStudentsByProject(this.studentCompanyId).subscribe({
          next:(res) =>{
            const projects =  res.projects

            projects.map(project =>{
              if(project.name !== this.studentProjectName){
                return false
              }
              return this.getProyectById(project.id).subscribe({
                next:(res)=>{
                  this.studentProjectTable = this.projectStudentsList(res.students)
                  this.getBussinesTutorDni(res.businessTutor.id)
                  this.getAcademicTutorDni(res.academicTutor.id)
                },
              })
            })
          }
        })
        this.getCoordinador(student.idCareer)
      },
    });
  };
  //TECNOLOGIA SUPERIOR EN

  ngOnInit(): void {
    this.setData();
    this.documentsService.getDocuments().subscribe({
      next: (res) => {
        res.sort((a, b) => a['id'] - b['id']);

        for (let i = 0; i < res.length; i++) {
          const { docName, documentDefinition } = res[i];

          const executeDocuments = new Function(`
              ${documentDefinition}
                return createDocument${i + 1};
            `)();

          this.Namefiles.push({
            document: async () =>
              await executeDocuments(
                // documentProps
                {
                  bgImage: backgroundImage(),
                  logoImage: logoImage(),
                  instituteName: this.instituteName,
                  docx,
                  fileSaver: fs,
                  exceljs: exceljs,
                  structuringCore: this.structuringCoreByCarrerAndLevel,
                  ...this.currentStudent,
                  ...res[i],
                  code: this.careerCode.concat('-', res[i].code),
                  studentProjectTable:this.studentProjectTable,
                  bussinesTutorDni:this.bussinesTutorDni,
                  academicTutorDni:this.academicTutorDni,
                  careerCoordinator: this.careerCoordinator,
                  careerCoordinatorDni:this.careerCoordinatorDni
                }
              ),
            label: docName,
            icon: 'pi pi-check',
          });
        }
      },

    });
  }
}
