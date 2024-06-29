import { DocumentProps } from '../models/documents-Props';
import * as exceljs from 'exceljs';

export function createDocument7( { exceljs, fileSaver, logoImage, instituteName }: DocumentProps ) {


  const workBook = new exceljs.Workbook();
  const workSheet = workBook.addWorksheet( 'Informe de Aprendizaje' );
  workSheet.pageSetup = {
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 1,
    orientation: 'landscape'
  };


  // const logo = workBook.addImage({
  // base64: await logoImage,
  // extension: 'png'
  // })

  workSheet.mergeCells( 'A1:B4' );
  // workSheet.addImage( logo, 'A1:B4')

  workSheet.mergeCells( 'C1:Q1' );
  workSheet.getCell( 'C1' ).value = instituteName;
  workSheet.getCell( 'C1' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '3366ff' } };

  workSheet.mergeCells( 'C2:Q2' );
  workSheet.getCell( 'C2' ).value = 'MACROPROCESO 01 DOCENCIA';

  workSheet.mergeCells( 'C3:Q3' );
  workSheet.getCell( 'C3' ).value = 'PROCESO 02 PROCESO DE FORMACIÓN PRÁCTICA EN EL ENTORNO LABORAL REAL  - FORMACIÓN DUAL';
  workSheet.getCell( 'C3' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'e6802c' } };

  workSheet.mergeCells( 'C4:Q4' );
  workSheet.getCell( 'C4' ).value = 'FORMATO 06 BITÁCORA DE APRENDIZAJE DE FASE PRÁCTICA';


  workSheet.getColumn( 'R' ).width = 15;
  workSheet.getColumn( 'S' ).width = 15;
  workSheet.getCell( 'R1' ).value = 'VERSIÓN';
  workSheet.getCell( 'S1' ).value = '1.0';

  workSheet.getCell( 'R2' ).value = 'ELABORACIÓN';
  workSheet.getCell( 'S2' ).value = '06-06-2023';

  workSheet.getCell( 'R3' ).value = 'ACTUALIZACIÓN';
  workSheet.getCell( 'S3' ).value = '06-06-2023';

  workSheet.getCell( 'R4' ).value = 'CÓDIGO';
  workSheet.getCell( 'S4' ).value = 'DS-010206';


  const usedCells = workSheet.getSheetValues();


  const applyBorder = ( cell: exceljs.Cell ) => {
    cell.border = {
      top: { style: 'thin', color: { argb: 'FF000000' } },
      left: { style: 'thin', color: { argb: 'FF000000' } },
      bottom: { style: 'thin', color: { argb: 'FF000000' } },
      right: { style: 'thin', color: { argb: 'FF000000' } }
    };
  };

  for ( let row = 1; row <= 4; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet.getRow( 5 ).height = 10;

  workSheet.mergeCells( 'A6:C6' );
  workSheet.getCell( 'A6' ).value = 'EMPRESA FORMADORA:';
  workSheet.getCell( 'A6' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'D6:H6' );
  workSheet.mergeCells( 'I6:K6' );
  workSheet.getCell( 'I6' ).value = 'NIVEL:';
  workSheet.getCell( 'I6' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'L6:S6' );

  workSheet.mergeCells( 'A7:C7' );
  workSheet.getCell( 'A7' ).value = 'ESTUDIANTE:';
  workSheet.getCell( 'A7' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'D7:H7' );
  workSheet.mergeCells( 'I7:K7' );
  workSheet.getCell( 'I7' ).value = 'CICLO ACADÉMICO:';
  workSheet.getCell( 'I7' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'L7:S7' );

  workSheet.mergeCells( 'A8:C8' );
  workSheet.getCell( 'A8' ).value = 'CÉDULA:';
  workSheet.getCell( 'A8' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'D8:H8' );
  workSheet.mergeCells( 'I8:K8' );
  workSheet.getCell( 'I8' ).value = 'F. INICIO FASE PRÁCTICA';
  workSheet.getCell( 'I8' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'L8:N8' );
  workSheet.getCell( 'L8' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
  workSheet.mergeCells( 'O8:Q8' );
  workSheet.getCell( 'O8' ).value = 'F. FIN FASE PRÁCTICA';
  workSheet.getCell( 'O8' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'R8:S8' );
  workSheet.getCell( 'R8' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };


  workSheet.mergeCells( 'A9:C9' );
  workSheet.getCell( 'A9' ).value = 'TUTOR(A) ACADÉMICO:';
  workSheet.getCell( 'A9' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'D9:H9' );
  workSheet.mergeCells( 'I9:K9' );
  workSheet.getCell( 'I9' ).value = 'NÚCLEO ESTRUCTURANTE:';
  workSheet.getCell( 'I9' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'L9:S9' );

  workSheet.mergeCells( 'A10:C10' );
  workSheet.getCell( 'A10' ).value = 'TUTOR(A) EMPRESARIAL:';
  workSheet.getCell( 'A10' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'D10:H10' );
  workSheet.mergeCells( 'I10:K10' );
  workSheet.getCell( 'I10' ).value = 'CARRERA:';
  workSheet.getCell( 'I10' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet.mergeCells( 'L10:S10' );

  for ( let row = 6; row <= 10; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'left' };
    }
  }

  workSheet.getRow( 11 ).height = 10;

  workSheet.mergeCells( 'A12:S12' );
  workSheet.getCell( 'A12' ).value = 'OBJETIVO DEL NÚCLEO ESTRUCTURANTE PARA LA FASE PRÁCTICA';
  workSheet.getCell( 'A12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet.mergeCells( 'A13:S13' );
  workSheet.getCell( 'A13' ).value = 'Objetivo';
  workSheet.getCell( 'A13' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
  workSheet.getRow( 13 ).height = 40;

  for ( let row = 12; row <= 13; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet.getRow( 14 ).height = 10;

  for ( let row = 15; row <= 29; row++ ) {
    for ( let col = 2; col <= 7; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }
  for ( let row = 15; row <= 29; row++ ) {
    workSheet.mergeCells( `B${ row }:E${ row }` );
    workSheet.mergeCells( `F${ row }:G${ row }` );

    workSheet.getRow( row ).height = 40;
  }

  workSheet.getCell( 'B15' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B15' ).font = { bold: true };
  workSheet.getCell( 'B15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'B15' ).value = 'EVALUACION DE DESEMPEÑO';

  workSheet.getCell( 'B16' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B16' ).value = 'Logro de Objetivos de Aprendizaje';

  workSheet.getCell( 'B17' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B17' ).value = 'Desempeño en los puestos de trabajo y actividades asignadas (Plan de rotación)';

  workSheet.getCell( 'B18' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B18' ).value = 'Capacidad de aplicar los conocimientos en la práctica.';

  workSheet.getCell( 'B19' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B19' ).value = 'Capacidad de comunicación oral y escrita.';

  workSheet.getCell( 'B20' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B20' ).value = 'Capacidad de investigación, aprender y actualizarse permanentemente';

  workSheet.getCell( 'B21' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B21' ).value = 'Capacidad creativa.';

  workSheet.getCell( 'B22' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B22' ).value = 'Capacidad para identificar, plantear y resolver problemas.';

  workSheet.getCell( 'B23' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B23' ).value = 'Capacidad de trabajo en equipo y capacidades interpersonales';

  workSheet.getCell( 'B24' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B24' ).value = 'Valoración y respecto por la diversidad y multiculturalidad.';

  workSheet.getCell( 'B25' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B25' ).value = 'Habilidad para trabajar en forma autónoma.';

  workSheet.getCell( 'B26' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B26' ).value = 'Habilidad para trabajar en forma grupal.';

  workSheet.getCell( 'B28' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B28' ).font = { bold: true };
  workSheet.getCell( 'B28' ).value = 'Promedio';

  workSheet.getCell( 'B29' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet.getCell( 'B29' ).font = { bold: true };
  workSheet.getCell( 'B29' ).value = 'Nota ponderada sobre 7 puntos';

  workSheet.getCell( 'F15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F15' ).font = { bold: true };
  workSheet.getCell( 'F15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'F15' ).value = 'NOTA \n (10 puntos)';

  workSheet.getCell( 'F16' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F16' ).value = 10;

  workSheet.getCell( 'F17' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F17' ).value = 10;

  workSheet.getCell( 'F18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F18' ).value = 10;

  workSheet.getCell( 'F19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F19' ).value = 10;

  workSheet.getCell( 'F20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F20' ).value = 10;

  workSheet.getCell( 'F21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F21' ).value = 10;

  workSheet.getCell( 'F22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F22' ).value = 10;

  workSheet.getCell( 'F23' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F23' ).value = 10;

  workSheet.getCell( 'F24' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F24' ).value = 10;

  workSheet.getCell( 'F25' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F25' ).value = 10;

  workSheet.getCell( 'F26' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F26' ).value = 10;

  workSheet.getRow( 27 ).height = 15;

  workSheet.getCell( 'F28' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F28' ).font = { bold: true };
  workSheet.getCell( 'F28' ).numFmt = '0.00';
  workSheet.getCell( 'F28' ).value = { formula: 'AVERAGE(F16:F26)' };

  workSheet.getCell( 'F29' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'F29' ).numFmt = '0.00';
  workSheet.getCell( 'F29' ).font = { bold: true };
  workSheet.getCell( 'F29' ).value = { formula: 'F28 * 0.7' };

  for ( let row = 15; row <= 25; row++ ) {
    for ( let col = 11; col <= 18; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }


  workSheet.mergeCells( 'K15:M16' );
  workSheet.getCell( 'K15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'K15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K15' ).font = { bold: true };
  workSheet.getCell( 'K15' ).value = 'DEFENSA PROYECTO TUTOR EMPRESARIAL';

  workSheet.mergeCells( 'K17:M17' );
  workSheet.getCell( 'K17' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'K17' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K17' ).font = { bold: true };
  workSheet.getCell( 'K17' ).value = 'CREITERIOS';

  workSheet.mergeCells( 'K18:M18' );
  workSheet.getRow(18).height = 60
  workSheet.getCell( 'K18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K18' ).value = 'Presentación en tiempo y forma (formato, normas APA, cronograma)';

  workSheet.mergeCells( 'K19:M19' );
  workSheet.getRow(19).height = 60
  workSheet.getCell( 'K19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K19' ).value = 'Calidad de la presentación (uso ayudas técnicas y audiovisuales,etc.)';

  workSheet.mergeCells( 'K20:M20' );
  workSheet.getCell( 'K20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K20' ).value = 'Dominio del contenido';

  workSheet.mergeCells( 'K21:M21' );
  workSheet.getCell( 'K21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K21' ).value = 'Claridad y precisión en la exposición';

  workSheet.mergeCells( 'K22:M22' );
  workSheet.getCell( 'K22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'K22' ).value = 'Satisfacción de la Empresa Formadora';

  workSheet.mergeCells( 'K23:Q23' );
  workSheet.getCell( 'K23' ).alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
  workSheet.getCell( 'K23' ).font = { bold: true };
  workSheet.getCell( 'K23' ).value = 'Nota Parcial de la Defensa del Proyecto:';

  workSheet.mergeCells( 'K24:Q24' );
  workSheet.getCell( 'K24' ).alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
  workSheet.getCell( 'K24' ).font = { bold: true };
  workSheet.getCell( 'K24' ).value = 'Nota Final de la Defensa del Proyecto:';

  workSheet.mergeCells( 'K25:Q25' );
  workSheet.getCell( 'K25' ).alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
  workSheet.getCell( 'K25' ).font = { bold: true };
  workSheet.getCell( 'K25' ).value = 'Nota ponderada sobre 3 puntos:';

  workSheet.mergeCells( 'N15:N16' );
  workSheet.getCell( 'N15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'N15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet.getCell( 'N15' ).font = { bold: true };
  workSheet.getCell( 'N15' ).value = 'Excelente';

  workSheet.getCell( 'N17' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'N17' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'N17' ).value = 4;

  workSheet.getCell( 'N18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'N18' ).value = 4;

  workSheet.getCell( 'N19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'N19' ).value = 4;

  workSheet.getCell( 'N20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'N20' ).value = 4;

  workSheet.getCell( 'N21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'N21' ).value = 4;

  workSheet.getCell( 'N22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'N22' ).value = 4;

  workSheet.mergeCells( 'O15:O16' );
  workSheet.getCell( 'O15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'O15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet.getCell( 'O15' ).font = { bold: true };
  workSheet.getCell( 'O15' ).value = 'Bueno';

  workSheet.getCell( 'O17' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'O17' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'O17' ).value = 3;

  workSheet.getCell( 'O18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'O19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'O20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'O21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'O22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.mergeCells( 'P15:P16' );
  workSheet.getCell( 'P15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'P15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet.getCell( 'P15' ).font = { bold: true };
  workSheet.getCell( 'P15' ).value = 'Regular';

  workSheet.getCell( 'P17' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'P17' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'P17' ).value = 2;

  workSheet.getCell( 'P18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'P19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'P20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'P21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'P22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.mergeCells( 'Q15:Q16' );
  workSheet.getCell( 'Q15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'Q15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true, textRotation: 90 };
  workSheet.getCell( 'Q15' ).font = { bold: true };
  workSheet.getCell( 'Q15' ).value = 'Deficiente';

  workSheet.getCell( 'Q17' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'Q17' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DEEAF6' } };
  workSheet.getCell( 'Q17' ).value = 1;

  workSheet.getCell( 'Q18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'Q19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'Q20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'Q21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.getCell( 'Q22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  workSheet.mergeCells( 'R15:R17' );
  workSheet.getCell( 'R15' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R15' ).value = 'NOTA PARCIAL';

  workSheet.getCell( 'R18' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R18' ).value = { formula: 'SUM(N18:Q18)' };

  workSheet.getCell( 'R19' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R19' ).value = { formula: 'SUM(N19:Q19)' };

  workSheet.getCell( 'R20' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R20' ).value = { formula: 'SUM(N20:Q20)' };

  workSheet.getCell( 'R21' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R21' ).value = { formula: 'SUM(N21:Q21)' };

  workSheet.getCell( 'R22' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R22' ).value = { formula: 'SUM(N22:Q22)' };

  workSheet.getCell( 'R23' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R23' ).value = { formula: 'SUM(R18:R22)' };

  workSheet.getCell( 'R24' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R24' ).numFmt = '0.00';
  workSheet.getCell( 'R24' ).value = { formula: 'R23 * 10 / 20' };

  workSheet.getCell( 'R25' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet.getCell( 'R25' ).numFmt = '0.00';
  workSheet.getCell( 'R25' ).value = { formula: 'R24 * 0.3' };

  for ( let row = 28; row <= 29; row++ ) {
    for ( let col = 11; col <= 15; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet.mergeCells('K28:M29')
  workSheet.getCell( 'K28' ).font = { bold: true };
  workSheet.getCell('K28').value = 'NOTA FINAL EMPRESA'

  workSheet.mergeCells('N28:O29')
  workSheet.getCell( 'N28' ).font = { bold: true };
  workSheet.getCell('N28').value = {formula:'F29 + R25'}


  for ( let row = 31; row <= 31; row++ ) {
    for ( let col = 2; col <= 5; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workSheet.mergeCells('B31:E31')
  workSheet.getCell('B31').value = 'COMENTARIOS/OBSERVACIONES'

  for ( let row = 32; row <= 35; row++ ) {
    workSheet.mergeCells( `B${ row }:O${ row }` );
    for ( let col = 2; col <= 15; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  workBook.xlsx.writeBuffer()
    .then( ( buffer ) => {
      const blob = new Blob( [ buffer ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } );
      fileSaver.saveAs( blob, 'InformeApredizaje.xlsx' );
    } )
    .catch( ( error ) => {
      console.error( 'Error al guardar el archivo:', error );
    } );

}
