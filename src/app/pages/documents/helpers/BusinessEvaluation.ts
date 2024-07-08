import { DocumentProps } from '../models/documents-Props';
import * as exceljs from 'exceljs';

export function createDocument7({ fileSaver, exceljs, process, version, structuringCore, elaborationDate, updateDate, code, instituteName, docName, logoImage, company, dni, firstName, secondName, lastName, secondLastName, academicTutor, businessTutor, email, career, academicPeriod, electivePeriod }: DocumentProps) {


  const workBook = new exceljs.Workbook();
  const workSheet1 = workBook.addWorksheet('Evaluacion-Empresarial');
  workSheet1.pageSetup = {
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 1,
    orientation: 'landscape'
  };


  // const logo1 = workBook.addImage({
  // base64: await logoImage,
  // extension: 'png'
  // })

  workSheet1.mergeCells('A1:B4');
  // workSheet1.addImage( logo1, 'A1:B4')

  workSheet1.mergeCells('C1:Q1');
  workSheet1.getCell('C1').value = instituteName;
  workSheet1.getCell('C1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '3366ff' } };

  workSheet1.mergeCells('C2:Q2');
  workSheet1.getCell('C2').value = 'MACROPROCESO 01 DOCENCIA';

  workSheet1.mergeCells('C3:Q3');
  workSheet1.getCell('C3').value = process;
  workSheet1.getCell('C3').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'e6802c' } };

  workSheet1.mergeCells('C4:Q4');
  workSheet1.getCell('C4').value = docName;


  workSheet1.getColumn('R').width = 15;
  workSheet1.getColumn('S').width = 15;
  workSheet1.getCell('R1').value = 'VERSIÓN';
  workSheet1.getCell('S1').value = version;

  workSheet1.getCell('R2').value = 'ELABORACIÓN';
  workSheet1.getCell('S2').value = elaborationDate;

  workSheet1.getCell('R3').value = 'ACTUALIZACIÓN';
  workSheet1.getCell('S3').value = updateDate;

  workSheet1.getCell('R4').value = 'CÓDIGO';
  workSheet1.getCell('S4').value = code;


  const usedCells = workSheet1.getSheetValues();


  const applyBorder = (cell: exceljs.Cell) => {
    cell.border = {
      top: { style: 'thin', color: { argb: 'FF000000' } },
      left: { style: 'thin', color: { argb: 'FF000000' } },
      bottom: { style: 'thin', color: { argb: 'FF000000' } },
      right: { style: 'thin', color: { argb: 'FF000000' } }
    };
  };

  for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 19; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet1.getRow(5).height = 10;

  workSheet1.mergeCells('A6:C6');
  workSheet1.getCell('A6').value = 'EMPRESA FORMADORA:';
  workSheet1.getCell('A6').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('D6:H6');
  workSheet1.mergeCells('I6:K6');
  workSheet1.getCell('I6').value = 'NIVEL:';
  workSheet1.getCell('I6').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('L6:S6');

  workSheet1.getCell('D6').value = company;
  workSheet1.getCell('D7').value = [firstName, secondName, lastName, secondLastName].join(' ');
  workSheet1.getCell('D8').value = dni;
  workSheet1.getCell('D9').value = academicTutor;
  workSheet1.getCell('D10').value = businessTutor;

  workSheet1.mergeCells('A7:C7');
  workSheet1.getCell('A7').value = 'ESTUDIANTE:';
  workSheet1.getCell('A7').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('D7:H7');
  workSheet1.mergeCells('I7:K7');
  workSheet1.getCell('I7').value = 'CICLO ACADÉMICO:';
  workSheet1.getCell('I7').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('L7:S7');


  workSheet1.getCell('L6').value = academicPeriod;
  workSheet1.getCell('L7').value = electivePeriod;
  workSheet1.getCell('L10').value = career;

  workSheet1.mergeCells('A8:C8');
  workSheet1.getCell('A8').value = 'CÉDULA:';
  workSheet1.getCell('A8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('D8:H8');
  workSheet1.mergeCells('I8:K8');
  workSheet1.getCell('I8').value = 'F. INICIO FASE PRÁCTICA';
  workSheet1.getCell('I8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('L8:N8');
  workSheet1.getCell('L8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
  workSheet1.mergeCells('O8:Q8');
  workSheet1.getCell('O8').value = 'F. FIN FASE PRÁCTICA';
  workSheet1.getCell('O8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('R8:S8');
  workSheet1.getCell('R8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };


  workSheet1.mergeCells('A9:C9');
  workSheet1.getCell('A9').value = 'TUTOR(A) ACADÉMICO:';
  workSheet1.getCell('A9').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('D9:H9');
  workSheet1.mergeCells('I9:K9');
  workSheet1.getCell('I9').value = 'NÚCLEO ESTRUCTURANTE:';
  workSheet1.getCell('I9').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('L9:S9');
  workSheet1.getCell('L9').value = structuringCore;

  workSheet1.mergeCells('A10:C10');
  workSheet1.getCell('A10').value = 'TUTOR(A) EMPRESARIAL:';
  workSheet1.getCell('A10').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('D10:H10');
  workSheet1.mergeCells('I10:K10');
  workSheet1.getCell('I10').value = 'CARRERA:';
  workSheet1.getCell('I10').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.mergeCells('L10:S10');

  for (let row = 6; row <= 10; row++) {
    for (let col = 1; col <= 19; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'left' };
    }
  }

  workSheet1.getCell('L9').alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: true,
  };


  workSheet1.getCell('D6').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('D7').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('D8').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('D9').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('D10').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('L6').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('L7').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet1.getCell('L10').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

  workSheet1.getRow(11).height = 10;

  workSheet1.mergeCells('A12:S12');
  workSheet1.getCell('A12').value = 'OBJETIVO DEL NÚCLEO ESTRUCTURANTE PARA LA FASE PRÁCTICA';
  workSheet1.getCell('A12').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet1.mergeCells('A13:S13');
  workSheet1.getCell('A13').value = 'Objetivo';
  workSheet1.getCell('A13').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
  workSheet1.getRow(13).height = 40;

  for (let row = 12; row <= 13; row++) {
    for (let col = 1; col <= 19; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet1.getRow(14).height = 10;

  for (let row = 15; row <= 29; row++) {
    for (let col = 2; col <= 7; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }
  for (let row = 15; row <= 29; row++) {
    workSheet1.mergeCells(`B${row}:E${row}`);
    workSheet1.mergeCells(`F${row}:G${row}`);

    workSheet1.getRow(row).height = 40;
  }

  workSheet1.getCell('B15').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B15').font = { bold: true };
  workSheet1.getCell('B15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('B15').value = 'EVALUACION DE DESEMPEÑO';

  workSheet1.getCell('B16').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B16').value = 'Logro de Objetivos de Aprendizaje';

  workSheet1.getCell('B17').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B17').value = 'Desempeño en los puestos de trabajo y actividades asignadas (Plan de rotación)';

  workSheet1.getCell('B18').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B18').value = 'Capacidad de aplicar los conocimientos en la práctica.';

  workSheet1.getCell('B19').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B19').value = 'Capacidad de comunicación oral y escrita.';

  workSheet1.getCell('B20').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B20').value = 'Capacidad de investigación, aprender y actualizarse permanentemente';

  workSheet1.getCell('B21').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B21').value = 'Capacidad creativa.';

  workSheet1.getCell('B22').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B22').value = 'Capacidad para identificar, plantear y resolver problemas.';

  workSheet1.getCell('B23').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B23').value = 'Capacidad de trabajo en equipo y capacidades interpersonales';

  workSheet1.getCell('B24').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B24').value = 'Valoración y respecto por la diversidad y multiculturalidad.';

  workSheet1.getCell('B25').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B25').value = 'Habilidad para trabajar en forma autónoma.';

  workSheet1.getCell('B26').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B26').value = 'Habilidad para trabajar en forma grupal.';

  workSheet1.getCell('B28').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B28').font = { bold: true };
  workSheet1.getCell('B28').value = 'Promedio';

  workSheet1.getCell('B29').alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet1.getCell('B29').font = { bold: true };
  workSheet1.getCell('B29').value = 'Nota ponderada sobre 7 puntos';

  workSheet1.getCell('F15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F15').font = { bold: true };
  workSheet1.getCell('F15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('F15').value = 'NOTA \n (10 puntos)';

  workSheet1.getCell('F16').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F16').value = 10;

  workSheet1.getCell('F17').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F17').value = 10;

  workSheet1.getCell('F18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F18').value = 10;

  workSheet1.getCell('F19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F19').value = 10;

  workSheet1.getCell('F20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F20').value = 10;

  workSheet1.getCell('F21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F21').value = 10;

  workSheet1.getCell('F22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F22').value = 10;

  workSheet1.getCell('F23').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F23').value = 10;

  workSheet1.getCell('F24').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F24').value = 10;

  workSheet1.getCell('F25').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F25').value = 10;

  workSheet1.getCell('F26').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F26').value = 10;

  workSheet1.getRow(27).height = 15;

  workSheet1.getCell('F28').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F28').font = { bold: true };
  workSheet1.getCell('F28').numFmt = '0.00';
  workSheet1.getCell('F28').value = { formula: 'AVERAGE(F16:F26)' };

  workSheet1.getCell('F29').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('F29').numFmt = '0.00';
  workSheet1.getCell('F29').font = { bold: true };
  workSheet1.getCell('F29').value = { formula: 'F28 * 0.7' };

  for (let row = 15; row <= 25; row++) {
    for (let col = 11; col <= 18; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }


  workSheet1.mergeCells('K15:M16');
  workSheet1.getCell('K15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('K15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K15').font = { bold: true };
  workSheet1.getCell('K15').value = 'DEFENSA PROYECTO TUTOR EMPRESARIAL';

  workSheet1.mergeCells('K17:M17');
  workSheet1.getCell('K17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('K17').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K17').font = { bold: true };
  workSheet1.getCell('K17').value = 'CREITERIOS';

  workSheet1.mergeCells('K18:M18');
  workSheet1.getRow(18).height = 60;
  workSheet1.getCell('K18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K18').value = 'Presentación en tiempo y forma (formato, normas APA, cronograma)';

  workSheet1.mergeCells('K19:M19');
  workSheet1.getRow(19).height = 60;
  workSheet1.getCell('K19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K19').value = 'Calidad de la presentación (uso ayudas técnicas y audiovisuales,etc.)';

  workSheet1.mergeCells('K20:M20');
  workSheet1.getCell('K20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K20').value = 'Dominio del contenido';

  workSheet1.mergeCells('K21:M21');
  workSheet1.getCell('K21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K21').value = 'Claridad y precisión en la exposición';

  workSheet1.mergeCells('K22:M22');
  workSheet1.getCell('K22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('K22').value = 'Satisfacción de la Empresa Formadora';

  workSheet1.mergeCells('K23:Q23');
  workSheet1.getCell('K23').alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
  workSheet1.getCell('K23').font = { bold: true };
  workSheet1.getCell('K23').value = 'Nota Parcial de la Defensa del Proyecto:';

  workSheet1.mergeCells('K24:Q24');
  workSheet1.getCell('K24').alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
  workSheet1.getCell('K24').font = { bold: true };
  workSheet1.getCell('K24').value = 'Nota Final de la Defensa del Proyecto:';

  workSheet1.mergeCells('K25:Q25');
  workSheet1.getCell('K25').alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
  workSheet1.getCell('K25').font = { bold: true };
  workSheet1.getCell('K25').value = 'Nota ponderada sobre 3 puntos:';

  workSheet1.mergeCells('N15:N16');
  workSheet1.getCell('N15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('N15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet1.getCell('N15').font = { bold: true };
  workSheet1.getCell('N15').value = 'Excelente';

  workSheet1.getCell('N17').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('N17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('N17').value = 4;

  workSheet1.getCell('N18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('N18').value = 4;

  workSheet1.getCell('N19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('N19').value = 4;

  workSheet1.getCell('N20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('N20').value = 4;

  workSheet1.getCell('N21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('N21').value = 4;

  workSheet1.getCell('N22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('N22').value = 4;

  workSheet1.mergeCells('O15:O16');
  workSheet1.getCell('O15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('O15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet1.getCell('O15').font = { bold: true };
  workSheet1.getCell('O15').value = 'Bueno';

  workSheet1.getCell('O17').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('O17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('O17').value = 3;

  workSheet1.getCell('O18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('O19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('O20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('O21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('O22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.mergeCells('P15:P16');
  workSheet1.getCell('P15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('P15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet1.getCell('P15').font = { bold: true };
  workSheet1.getCell('P15').value = 'Regular';

  workSheet1.getCell('P17').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('P17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('P17').value = 2;

  workSheet1.getCell('P18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('P19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('P20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('P21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('P22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.mergeCells('Q15:Q16');
  workSheet1.getCell('Q15').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('Q15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet1.getCell('Q15').font = { bold: true };
  workSheet1.getCell('Q15').value = 'Deficiente';

  workSheet1.getCell('Q17').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('Q17').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet1.getCell('Q17').value = 1;

  workSheet1.getCell('Q18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('Q19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('Q20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('Q21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.getCell('Q22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet1.mergeCells('R15:R17');
  workSheet1.getCell('R15').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R15').value = 'NOTA PARCIAL';

  workSheet1.getCell('R18').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R18').value = { formula: 'SUM(N18:Q18)' };

  workSheet1.getCell('R19').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R19').value = { formula: 'SUM(N19:Q19)' };

  workSheet1.getCell('R20').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R20').value = { formula: 'SUM(N20:Q20)' };

  workSheet1.getCell('R21').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R21').value = { formula: 'SUM(N21:Q21)' };

  workSheet1.getCell('R22').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R22').value = { formula: 'SUM(N22:Q22)' };

  workSheet1.getCell('R23').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R23').value = { formula: 'SUM(R18:R22)' };

  workSheet1.getCell('R24').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R24').numFmt = '0.00';
  workSheet1.getCell('R24').value = { formula: 'R23 * 10 / 20' };

  workSheet1.getCell('R25').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getCell('R25').numFmt = '0.00';
  workSheet1.getCell('R25').value = { formula: 'R24 * 0.3' };

  for (let row = 28; row <= 29; row++) {
    for (let col = 11; col <= 15; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet1.mergeCells('K28:M29');
  workSheet1.getCell('K28').font = { bold: true };
  workSheet1.getCell('K28').value = 'NOTA FINAL EMPRESA';

  workSheet1.mergeCells('N28:O29');
  workSheet1.getCell('N28').font = { bold: true };
  workSheet1.getCell('N28').numFmt = '0.00';
  workSheet1.getCell('N28').value = { formula: 'F29 + R25' };


  for (let row = 31; row <= 31; row++) {
    for (let col = 2; col <= 5; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet1.mergeCells('B31:E31');
  workSheet1.getCell('B31').value = 'COMENTARIOS/OBSERVACIONES';

  for (let row = 32; row <= 35; row++) {
    workSheet1.mergeCells(`B${row}:O${row}`);
    for (let col = 2; col <= 15; col++) {
      applyBorder(workSheet1.getCell(row, col));
      const cell = workSheet1.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }



  const workSheet2 = workBook.addWorksheet('Evaluacion Instituto');
  workSheet2.pageSetup = {
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 1,
    orientation: 'landscape'
  };


  // const logo2= workBook.addImage({
  // base64: await logoImage,
  // extension: 'png'
  // })

  workSheet2.mergeCells('A1:B4');
  // workSheet2.addImage( logo2, 'A1:B4')

  workSheet2.mergeCells('C1:Q1');
  workSheet2.getCell('C1').value = instituteName;
  workSheet2.getCell('C1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '3366ff' } };

  workSheet2.mergeCells('C2:Q2');
  workSheet2.getCell('C2').value = 'MACROPROCESO 01 DOCENCIA';

  workSheet2.mergeCells('C3:Q3');
  workSheet2.getCell('C3').value = process;
  workSheet2.getCell('C3').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'e6802c' } };

  workSheet2.mergeCells('C4:Q4');
  workSheet2.getCell('C4').value = docName;


  workSheet2.getColumn('R').width = 15;
  workSheet2.getColumn('S').width = 15;
  workSheet2.getCell('R1').value = 'VERSIÓN';
  workSheet2.getCell('S1').value = version;

  workSheet2.getCell('R2').value = 'ELABORACIÓN';
  workSheet2.getCell('S2').value = elaborationDate;

  workSheet2.getCell('R3').value = 'ACTUALIZACIÓN';
  workSheet2.getCell('S3').value = updateDate;

  workSheet2.getCell('R4').value = 'CÓDIGO';
  workSheet2.getCell('S4').value = code;

  workSheet2.getCell('D6').value = company;
  workSheet2.getCell('D7').value = [firstName, secondName, lastName, secondLastName].join(' ');
  workSheet2.getCell('D8').value = dni;
  workSheet2.getCell('D9').value = academicTutor;
  workSheet2.getCell('D10').value = businessTutor;
  workSheet2.getCell('L6').value = academicPeriod;
  workSheet2.getCell('L7').value = electivePeriod;
  workSheet2.getCell('L10').value = career;


  for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 19; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet2.getRow(5).height = 10;

  workSheet2.mergeCells('A6:C6');
  workSheet2.getCell('A6').value = 'EMPRESA FORMADORA:';
  workSheet2.getCell('A6').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('D6:H6');
  workSheet2.mergeCells('I6:K6');
  workSheet2.getCell('I6').value = 'NIVEL:';
  workSheet2.getCell('I6').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('L6:S6');

  workSheet2.mergeCells('A7:C7');
  workSheet2.getCell('A7').value = 'ESTUDIANTE:';
  workSheet2.getCell('A7').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('D7:H7');
  workSheet2.mergeCells('I7:K7');
  workSheet2.getCell('I7').value = 'CICLO ACADÉMICO:';
  workSheet2.getCell('I7').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('L7:S7');

  workSheet2.mergeCells('A8:C8');
  workSheet2.getCell('A8').value = 'CÉDULA:';
  workSheet2.getCell('A8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('D8:H8');
  workSheet2.mergeCells('I8:K8');
  workSheet2.getCell('I8').value = 'F. INICIO FASE PRÁCTICA';
  workSheet2.getCell('I8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('L8:N8');
  workSheet2.getCell('L8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
  workSheet2.mergeCells('O8:Q8');
  workSheet2.getCell('O8').value = 'F. FIN FASE PRÁCTICA';
  workSheet2.getCell('O8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('R8:S8');
  workSheet2.getCell('R8').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };


  workSheet2.mergeCells('A9:C9');
  workSheet2.getCell('A9').value = 'TUTOR(A) ACADÉMICO:';
  workSheet2.getCell('A9').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('D9:H9');
  workSheet2.mergeCells('I9:K9');
  workSheet2.getCell('I9').value = 'NÚCLEO ESTRUCTURANTE:';
  workSheet2.getCell('I9').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('L9:S9');
  workSheet2.getCell('L9').value = structuringCore;


  workSheet2.mergeCells('A10:C10');
  workSheet2.getCell('A10').value = 'TUTOR(A) EMPRESARIAL:';
  workSheet2.getCell('A10').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('D10:H10');
  workSheet2.mergeCells('I10:K10');
  workSheet2.getCell('I10').value = 'CARRERA:';
  workSheet2.getCell('I10').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.mergeCells('L10:S10');

  for (let row = 6; row <= 10; row++) {
    for (let col = 1; col <= 19; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    }
  }

  workSheet2.getCell('L9').alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: true,
  };

  workSheet2.getCell('D6').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('D7').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('D8').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('D9').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('D10').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('L6').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('L7').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  workSheet2.getCell('L10').alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };


  workSheet2.getRow(11).height = 10;

  workSheet2.mergeCells('A12:S12');
  workSheet2.getCell('A12').value = 'OBJETIVO DEL NÚCLEO ESTRUCTURANTE PARA LA FASE PRÁCTICA';
  workSheet2.getCell('A12').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.mergeCells('A13:S13');
  workSheet2.getCell('A13').value = 'Objetivo';
  workSheet2.getCell('A13').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
  workSheet2.getRow(13).height = 40;

  for (let row = 12; row <= 13; row++) {
    for (let col = 1; col <= 19; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet2.getRow(14).height = 10;

  for (let row = 15; row <= 32; row++) {
    for (let col = 1; col <= 7; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }


  workSheet2.mergeCells('A15:B18');
  workSheet2.getCell('A15').font = { bold: true };
  workSheet2.getCell('A15').value = 'DEFENSA PROYECTO TUTOR ACADÉMICO';

  workSheet2.mergeCells('A19:B19');
  workSheet2.getCell('A19').value = 'CRITERIOS';

  workSheet2.mergeCells('A20:B21');
  workSheet2.getCell('A20').value = 'Presentación en tiempo y forma';

  workSheet2.mergeCells('A22:B23');
  workSheet2.getCell('A22').value = 'Calidad de la presentación ';

  workSheet2.mergeCells('A24:B25');
  workSheet2.getCell('A24').value = 'Dominio del contenido';

  workSheet2.mergeCells('A26:B27');
  workSheet2.getCell('A26').value = 'Claridad y precisión en la exposición';

  workSheet2.mergeCells('A28:B29');
  workSheet2.getCell('A28').value = 'Satisfacción de la Empresa Formadora';

  workSheet2.mergeCells('A30:F30');
  workSheet2.getCell('A30').alignment = { horizontal: 'right' };
  workSheet2.getCell('A30').font = { bold: true };
  workSheet2.getCell('A30').value = 'Nota Parcial de la Defensa del Proyecto:';

  workSheet2.mergeCells('A31:F31');
  workSheet2.getCell('A31').alignment = { horizontal: 'right', };
  workSheet2.getCell('A31').font = { bold: true };
  workSheet2.getCell('A31').value = 'Nota Final de la Defensa del Proyecto:';

  workSheet2.mergeCells('A32:F32');
  workSheet2.getCell('A32').alignment = { horizontal: 'right' };
  workSheet2.getCell('A32').font = { bold: true };
  workSheet2.getCell('A32').value = 'Nota ponderada sobre 3 puntos';

  workSheet2.mergeCells('C15:C18');
  workSheet2.getCell('C15').alignment = { textRotation: 90 };
  workSheet2.getCell('C15').value = 'Excelente';

  workSheet2.getCell('C19').value = 4;

  workSheet2.mergeCells('C20:C21');
  workSheet2.getCell('C20').value = 4;

  workSheet2.mergeCells('C22:C23');
  workSheet2.getCell('C22').value = 4;

  workSheet2.mergeCells('C24:C25');
  workSheet2.getCell('C24').value = 4;

  workSheet2.mergeCells('C26:C27');
  workSheet2.getCell('C26').value = 4;

  workSheet2.mergeCells('C28:C29');
  workSheet2.getCell('C28').value = 4;

  workSheet2.mergeCells('D15:D18');
  workSheet2.getCell('D15').alignment = { textRotation: 90 };
  workSheet2.getCell('D15').value = 'Bueno';

  workSheet2.getCell('D19').value = 3;

  workSheet2.mergeCells('D20:D21');

  workSheet2.mergeCells('D22:D23');

  workSheet2.mergeCells('D24:D25');

  workSheet2.mergeCells('D26:D27');

  workSheet2.mergeCells('D28:D29');

  workSheet2.mergeCells('E15:E18');
  workSheet2.getCell('E15').alignment = { textRotation: 90 };
  workSheet2.getCell('E15').value = 'Regular';

  workSheet2.getCell('E19').value = 2;

  workSheet2.mergeCells('E20:E21');

  workSheet2.mergeCells('E22:E23');

  workSheet2.mergeCells('E24:E25');

  workSheet2.mergeCells('E26:E27');

  workSheet2.mergeCells('E28:E29');

  workSheet2.mergeCells('F15:F18');
  workSheet2.getCell('F15').alignment = { textRotation: 90 };
  workSheet2.getCell('F15').value = 'Deficiente';

  workSheet2.getCell('F19').value = 1;

  workSheet2.mergeCells('F20:F21');

  workSheet2.mergeCells('F22:F23');

  workSheet2.mergeCells('F24:F25');

  workSheet2.mergeCells('F26:F27');

  workSheet2.mergeCells('F28:F29');

  workSheet2.mergeCells('G15:G19');
  workSheet2.getCell('G15').font = { bold: true };
  workSheet2.getCell('G15').value = 'NOTA PARCIAL';

  workSheet2.mergeCells('G20:G21');
  workSheet2.getCell('G20').value = { formula: 'Sum(C20:F21)' };

  workSheet2.mergeCells('G22:G23');
  workSheet2.getCell('G22').value = { formula: 'Sum(C22:F23)' };

  workSheet2.mergeCells('G24:G25');
  workSheet2.getCell('G24').value = { formula: 'Sum(C24:F25)' };

  workSheet2.mergeCells('G26:G27');
  workSheet2.getCell('G26').value = { formula: 'Sum(C26:F27)' };

  workSheet2.mergeCells('G28:G29');
  workSheet2.getCell('G28').value = { formula: 'Sum(C28:F29)' };

  workSheet2.getCell('G30').value = { formula: 'Sum(G20:G29)' };

  workSheet2.getCell('G31').value = { formula: 'G30 * 10 / 20' };
  workSheet2.getCell('G31').numFmt = '0.00';

  workSheet2.getCell('G32').value = { formula: 'G31 * 0.3' };
  workSheet2.getCell('G32').numFmt = '0.00';


  for (let row = 15; row <= 34; row++) {
    for (let col = 9; col <= 18; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet2.mergeCells('I15:K16');
  workSheet2.getCell('I15').value = 'TEMA';

  workSheet2.mergeCells('I17:K34');
  workSheet2.getCell('I17').value = 'Sistema de Inventarios';

  workSheet2.mergeCells('L15:Q16');
  workSheet2.getCell('L15').value = 'PARÁMETROS PROYECTO EMPRESARIAL';

  workSheet2.mergeCells('L17:Q18');
  workSheet2.getCell('L17').value = '1.Proactividad, independencia y compromiso demostrado en la elaboración del proyecto.';
  workSheet2.getCell('L17').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L19:Q20');
  workSheet2.getCell('L19').value = '2. Plazo y calidad en la entrega de documentos.';
  workSheet2.getCell('L19').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L21:Q22');
  workSheet2.getCell('L21').value = '3. Cumplimiento de parametros en el  proyecto empresarial escrito.';
  workSheet2.getCell('L21').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L23:Q24');
  workSheet2.getCell('L23').value = '4. Desarrollo del proyecto en profundidad y aporte a la solución del problema.';
  workSheet2.getCell('L23').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L25:Q26');
  workSheet2.getCell('L25').value = '5. Cumplimiento de requerimientos / objetivos planteados al inicio del proyecto.';
  workSheet2.getCell('L25').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L27:Q28');
  workSheet2.getCell('L27').value = '6. Uso de metodología científica y aplicación de normas bibliográficas.';
  workSheet2.getCell('L27').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L29:Q30');
  workSheet2.getCell('L30').value = '7. Aporte al proyecto acorde al nivel académico.';
  workSheet2.getCell('L30').alignment = { horizontal: 'left', wrapText: true, vertical: 'middle' };

  workSheet2.mergeCells('L31:Q32');
  workSheet2.getCell('L31').value = 'Promedio Parcial del Proyecto Empresarial:';
  workSheet2.getCell('L31').alignment = { horizontal: 'right' };

  workSheet2.mergeCells('L33:Q34');
  workSheet2.getCell('L33').value = 'Nota ponderada sobre 7 puntos:';
  workSheet2.getCell('L33').alignment = { horizontal: 'right' };


  workSheet2.mergeCells('R15:R16');
  workSheet2.getCell('R15').value = 'NOTA';

  workSheet2.mergeCells('R17:R18');
  workSheet2.getCell('R17').value = 10;

  workSheet2.mergeCells('R19:R20');
  workSheet2.getCell('R19').value = 10;

  workSheet2.mergeCells('R21:R22');
  workSheet2.getCell('R21').value = 10;

  workSheet2.mergeCells('R23:R24');
  workSheet2.getCell('R23').value = 10;

  workSheet2.mergeCells('R25:R26');
  workSheet2.getCell('R25').value = 10;

  workSheet2.mergeCells('R27:R28');
  workSheet2.getCell('R27').value = 10;

  workSheet2.mergeCells('R29:R30');
  workSheet2.getCell('R30').value = 10;

  workSheet2.mergeCells('R31:R32');
  workSheet2.getCell('R31').numFmt = '0.00';
  workSheet2.getCell('R31').value = { formula: 'AVERAGE(R17:R30)' };

  workSheet2.mergeCells('R33:R34');
  workSheet2.getCell('R33').numFmt = '0.00';
  workSheet2.getCell('R33').value = { formula: 'R31 * 0.7' };

  for (let row = 37; row <= 42; row++) {
    for (let col = 1; col <= 8; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet2.mergeCells('A37:H37');
  workSheet2.getCell('A37').value = 'EVALUACIÓN FINAL CONSOLIDADO EMPRESA - INSTITUTO';
  workSheet2.getCell('A37').font = { bold: true };

  workSheet2.mergeCells('A38:D38');
  workSheet2.getCell('A38').value = 'EVALUACIÓN EMPRESA';
  workSheet2.getCell('A38').font = { bold: true };

  workSheet2.mergeCells('A39:D40');
  workSheet2.getCell('A39').value = { formula: "'Evaluacion-Empresarial'!N28" };
  workSheet2.getCell('A39').numFmt = '0.00';

  workSheet2.mergeCells('A41:D42');
  workSheet2.getCell('A41').value = 'PROMEDIO FINAL FASE PRÁCTICA:';
  workSheet2.getCell('A41').font = { bold: true };

  workSheet2.mergeCells('E38:H38');
  workSheet2.getCell('E38').value = 'EVALUACIÓN INSTITUTO';
  workSheet2.getCell('E38').numFmt = '0.00';
  workSheet2.getCell('E38').font = { bold: true };

  workSheet2.mergeCells('E39:H40');
  workSheet2.getCell('E39').value = { formula: 'Sum(G32:R33)' };

  workSheet2.mergeCells('E41:H42');
  workSheet2.getCell('E41').numFmt = '0.00';
  workSheet2.getCell('E41').value = { formula: '(A39*0.5) +(E39*0.5) ' };

  for (let row = 37; row <= 37; row++) {
    for (let col = 10; col <= 13; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet2.mergeCells('J37:M37');
  workSheet2.getCell('J37').value = 'COMENTARIOS / OBSERVACIONES:';
  workSheet2.getCell('J37').font = { bold: true };

  for (let row = 38; row <= 42; row++) {

    workSheet2.mergeCells(`J${row}:R${row}`);

    for (let col = 10; col <= 18; col++) {
      applyBorder(workSheet2.getCell(row, col));
      const cell = workSheet2.getCell(row, col);
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }


  workBook.xlsx.writeBuffer()
    .then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fileSaver.saveAs(blob, 'Evaluacion Empresarial - Institucional.xlsx');
    })
    .catch((error) => {
      console.error('Error al guardar el archivo:', error);
    });

}
