import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx/xlsx.mjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReportService } from '../../service/report.service';
import { ToastrService } from '@app/shared/services/toastr.service';
import { ListCompany } from '@app/pages/company/models/list-company';
import { CompanyService } from '@app/pages/company/service/company.service';
import { AuthService } from '@app/auth/servicies/auth.service';
import { ReportByCompany } from '../../models/report-company';

@Component({
  selector: 'app-company-report',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.scss'],
})
export class CompanyReportComponent implements OnInit {
  isVisibleReport: boolean = false;
  objectCompany: ReportByCompany;
  companies: ListCompany[] = [];

  companyName = new FormControl(null, [
    Validators.required,
    Validators.minLength(1),
  ]);

  constructor(
    private reportService: ReportService,
    private toastrService: ToastrService,
    private companyService: CompanyService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {

    this.getCompany()
  }

  getCompany() {
    this.companyService.getListCompany(this.authService.career.id, { page: 0, limit: 100 })
      .subscribe((data) => {
       this.companies = data.results
        
      });
  }
  downloadXLSXReportCompany() {
    const mappedStudentName = this.objectCompany.students.map(
      (item) => item.completeNames
    );
    const mappedLevel = this.objectCompany.students.map(
      (item) => item.periodAcademic
    );
    const mappedProject = this.objectCompany.students.map(
      (item) => item.project || 'Por asignar'
    );
    const data = [
      ['Empresa', 'Tutor Empresarial', 'Tutor Académico'],
      [
        this.objectCompany.company,
        this.objectCompany.businessTutor || 'Por asignar',
        this.objectCompany.academicTutor || 'Por asignar',
      ],
      [],
      ['Estudiante', 'Nivel', 'Proyecto'],
      [[mappedStudentName], [mappedLevel], [mappedProject]],
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'reporte_empresa');
    const wsConfig = wb.Sheets['reporte_empresa'];
    wsConfig['!cols'] = [
      { width: 58 }, // Ancho de columna para Empresa
      { width: 30 }, // Ancho de columna para tutor empresarial
      { width: 35 }, //Ancho de columna para tutor academico
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

    const filename = `${getFormattedDate()}_Reporte_por_Empresa.xlsx`;
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    window.URL.revokeObjectURL(url);
  }

  downloadPDFReportCompany() {
    const DataReportCompany = document.getElementById('htmlCompanyReport');
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
        docResult.save(`${formattedDate}_Reporte_por_empresa.pdf`);
      });

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
  }

  getDataCompany() {
    this.reportService
      .getReportCompany(this.companyName.value)
      .subscribe((data) => {
        if ((this.objectCompany = data)) {
          this.isVisibleReport = true;
        } else {
          this.isVisibleReport;
        }

        console.log(data);

        this.toastrService.showSuccess('Reporte encontrado');
      });
  }

  clearScreen() {
    this.isVisibleReport = false;
  }
}
