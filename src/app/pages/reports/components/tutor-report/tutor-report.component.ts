import jsPDF from 'jspdf';
import * as XLSX from 'xlsx/xlsx.mjs';
import html2canvas from 'html2canvas';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReportByTutor } from '../../models/report-tutor';
import { ListTutor } from '@pages/tutor/models/list-tutor';
import { ReportService } from '../../service/report.service';
import { AuthService } from '@app/auth/servicies/auth.service';
import { TutorService } from '@pages/tutor/service/tutor.service';
import { ToastrService } from '@app/shared/services/toastr.service';


@Component({
  selector: 'app-tutor-report',
  templateUrl: './tutor-report.component.html',
  styleUrls: ['./tutor-report.component.scss'],
})
export class TutorReportComponent implements OnInit {
  isVisibleReport: boolean = false;
  tutorReport: ReportByTutor[] = [];
  academicTutors: ListTutor[] = [];

  academicTutor = new FormControl(null, [
    Validators.required,
    Validators.minLength(1),
  ]);

  constructor(
    private reportService: ReportService,
    private toastrService: ToastrService,
    private tutorService: TutorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getTutorsAcademic();
  }

  getTutorsAcademic() {
    this.tutorService
      .getListTutorAcademic(this.authService.career.id, { page: 0, limit: 100 })
      .subscribe((data) => {
        this.academicTutors = data.map((tutor) => {
          return {
            ...tutor,
            completeName: `${tutor.firstName} ${tutor.lastName}`,
          };
        });
      });
  }
  downloadXLSXReportTutor() {
    const data = [
      [
        'Tutor Académico',
        'Empresa',
        'Tutor Empresarial',
        'Estudiantes',
        'Nivel',
        'Proyecto',
      ],
    ];
    this.tutorReport.forEach((item) => {
      const studentNames = item.student
        .map((student) => student.completeNames)
        .join(', ');
      const studentLevel = item.student
        .map((student) => student.periodAcademic)
        .join(', ');
      const studentProject = item.student
        .map((student) => student.project || 'Por asignar')
        .join(', ');

      data.push([
        item.academicTutor,
        item.company || 'Por asignar',
        item.businessTutor || 'Por asignar',
        studentNames,
        studentLevel,
        studentProject,
      ]);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'reporte_tutor');

    const wsConfig = wb.Sheets['reporte_tutor'];
    wsConfig['!cols'] = [
      { width: 35 }, // Ancho de columna para tutorAcademico
      { width: 30 }, // Ancho de columna para Empresa
      { width: 35 }, //Ancho de columna para tutorEmpresarial
      { width: 35 }, //Ancho de columna para EStudiantes
      { width: 30 }, //Ancho de columna para Nivel
      { width: 35 }, //Ancho de columna para Proyecto
    ];

    const wbout: ArrayBuffer = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });
    function getFormattedDate(): string {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      return `${day}-${month}-${year}`;
    }

    const filnamee = `${getFormattedDate()}_Reporte_por_tutor.xlsx`;
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filnamee;
    a.click();

    window.URL.revokeObjectURL(url);
  }

  downloadPDFReportTutor() {
    const DataReportCompany = document.getElementById('htmlTutorReport');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };

    html2canvas(DataReportCompany, options)
      .then((canvas) => {
        const img = canvas.toDataURL('src/assets/img/logoYav.png');
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`${formattedDate}_Reporte_por_tutor.pdf`);
      });

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
  }

  getDataTutor() {
    this.reportService
      .getArrayDataTutor(this.academicTutor.value)
      .subscribe((data) => {
        this.tutorReport = data;
        console.log(data);
        this.isVisibleReport = true;
        this.toastrService.showSuccess('Reporte encontrado');
      });
  }
  clearScreenn() {
    this.isVisibleReport = false;
  }
}
