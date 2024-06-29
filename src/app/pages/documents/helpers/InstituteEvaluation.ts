import { DocumentProps } from '../models/documents-Props';
import * as exceljs from 'exceljs';

export function createDocument8( { exceljs, fileSaver, logoImage, instituteName }: DocumentProps ) {


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
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText:true };
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
      cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText:true };
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
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText:true };
    }
  }

  workSheet.getRow( 14 ).height = 10;

  for ( let row = 15; row <= 32; row++ ) {
    for ( let col = 1; col <= 7; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText:true };
    }
  }


  workSheet.mergeCells( 'A15:B18');
  workSheet.getCell( 'A15').font ={bold:true}
  workSheet.getCell( 'A15').value= 'DEFENSA PROYECTO TUTOR ACADÉMICO'

  workSheet.mergeCells( 'A19:B19');
  workSheet.getCell( 'A19').value= 'CRITERIOS'

  workSheet.mergeCells( 'A20:B21');
  workSheet.getCell( 'A20').value= 'Presentación en tiempo y forma'

  workSheet.mergeCells( 'A22:B23');
  workSheet.getCell( 'A22').value= 'Calidad de la presentación '

  workSheet.mergeCells( 'A24:B25');
  workSheet.getCell( 'A24').value= 'Dominio del contenido'

  workSheet.mergeCells( 'A26:B27');
  workSheet.getCell( 'A26').value= 'Claridad y precisión en la exposición'

  workSheet.mergeCells( 'A28:B29');
  workSheet.getCell( 'A28').value= 'Satisfacción de la Empresa Formadora'

  workSheet.mergeCells( 'A30:F30');
  workSheet.getCell('A30').alignment={horizontal:'right'};
  workSheet.getCell('A30').font = {bold:true}
  workSheet.getCell( 'A30').value= 'Nota Parcial de la Defensa del Proyecto:'

  workSheet.mergeCells( 'A31:F31');
  workSheet.getCell('A31').alignment={horizontal:'right',};
  workSheet.getCell('A31').font = {bold:true}
  workSheet.getCell( 'A31').value= 'Nota Final de la Defensa del Proyecto:'

  workSheet.mergeCells( 'A32:F32');
  workSheet.getCell('A32').alignment={horizontal:'right'};
  workSheet.getCell('A32').font = {bold:true}
  workSheet.getCell( 'A32').value= 'Nota ponderada sobre 3 puntos'

  workSheet.mergeCells( 'C15:C18');
  workSheet.getCell('C15').alignment={textRotation:90};
  workSheet.getCell( 'C15').value= 'Excelente'

  workSheet.getCell( 'C19').value= 4

  workSheet.mergeCells( 'C20:C21');
  workSheet.getCell( 'C20').value= 4

  workSheet.mergeCells( 'C22:C23');
  workSheet.getCell( 'C22').value= 4

  workSheet.mergeCells( 'C24:C25');
  workSheet.getCell( 'C24').value= 4

  workSheet.mergeCells( 'C26:C27');
  workSheet.getCell( 'C26').value= 4

  workSheet.mergeCells( 'C28:C29');
  workSheet.getCell( 'C28').value= 4

  workSheet.mergeCells( 'D15:D18');
  workSheet.getCell('D15').alignment={textRotation:90};
  workSheet.getCell( 'D15').value= 'Bueno'

  workSheet.getCell( 'D19').value= 3

  workSheet.mergeCells( 'D20:D21');

  workSheet.mergeCells( 'D22:D23');

  workSheet.mergeCells( 'D24:D25');

  workSheet.mergeCells( 'D26:D27');

  workSheet.mergeCells( 'D28:D29');

  workSheet.mergeCells( 'E15:E18');
  workSheet.getCell('E15').alignment={textRotation:90};
  workSheet.getCell( 'E15').value= 'Regular'

  workSheet.getCell( 'E19').value= 2

  workSheet.mergeCells( 'E20:E21');

  workSheet.mergeCells( 'E22:E23');

  workSheet.mergeCells( 'E24:E25');

  workSheet.mergeCells( 'E26:E27');

  workSheet.mergeCells( 'E28:E29');

  workSheet.mergeCells( 'F15:F18');
  workSheet.getCell('F15').alignment={textRotation:90};
  workSheet.getCell( 'F15').value= 'Deficiente'

  workSheet.getCell( 'F19').value= 1

  workSheet.mergeCells( 'F20:F21');

  workSheet.mergeCells( 'F22:F23');

  workSheet.mergeCells( 'F24:F25');

  workSheet.mergeCells( 'F26:F27');

  workSheet.mergeCells( 'F28:F29');

  workSheet.mergeCells( 'G15:G19');
  workSheet.getCell( 'G15').font={bold:true}
  workSheet.getCell( 'G15').value= 'NOTA PARCIAL'

  workSheet.mergeCells( 'G20:G21');
  workSheet.getCell( 'G20').value= {formula:'Sum(C20:F21)'}

  workSheet.mergeCells( 'G22:G23');
  workSheet.getCell( 'G22').value= {formula:'Sum(C22:F23)'}

  workSheet.mergeCells( 'G24:G25');
  workSheet.getCell( 'G24').value= {formula:'Sum(C24:F25)'}

  workSheet.mergeCells( 'G26:G27');
  workSheet.getCell( 'G26').value= {formula:'Sum(C26:F27)'}

  workSheet.mergeCells( 'G28:G29');
  workSheet.getCell( 'G28').value= {formula:'Sum(C28:F29)'}

  workSheet.getCell('G30').value={formula:'Sum(G20:G29)'}

  workSheet.getCell('G31').value={formula:'G30 * 10 / 20'}
  workSheet.getCell( 'G31' ).numFmt = '0.00';

  workSheet.getCell('G32').value={formula:'G31 * 0.3'}
  workSheet.getCell( 'G32' ).numFmt = '0.00';


  for ( let row = 15; row <= 34; row++ ) {
    for ( let col = 9; col <= 18; col++ ) {
      applyBorder( workSheet.getCell( row, col ) );
      const cell = workSheet.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText:true };
    }
  }

  workSheet.mergeCells('I15:K16')
  workSheet.getCell('I15').value = 'TEMA'

  workSheet.mergeCells('I17:K34')
  workSheet.getCell('I17').value = 'Sistema de Inventarios'

  workSheet.mergeCells('L15:Q16')
  workSheet.getCell('L15').value = 'PARÁMETROS PROYECTO EMPRESARIAL'

  workSheet.mergeCells('L17:Q18')
  workSheet.getCell('L17').value = '1.Proactividad, independencia y compromiso demostrado en la elaboración del proyecto.'
  workSheet.getCell('L17').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L19:Q20')
  workSheet.getCell('L19').value = '2. Plazo y calidad en la entrega de documentos.'
  workSheet.getCell('L19').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L21:Q22')
  workSheet.getCell('L21').value = '3. Cumplimiento de parametros en el  proyecto empresarial escrito.'
  workSheet.getCell('L21').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L23:Q24')
  workSheet.getCell('L23').value = '4. Desarrollo del proyecto en profundidad y aporte a la solución del problema.'
  workSheet.getCell('L23').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L25:Q26')
  workSheet.getCell('L25').value = '5. Cumplimiento de requerimientos / objetivos planteados al inicio del proyecto.'
  workSheet.getCell('L25').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L27:Q28')
  workSheet.getCell('L27').value = '6. Uso de metodología científica y aplicación de normas bibliográficas.'
  workSheet.getCell('L27').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L29:Q30')
  workSheet.getCell('L30').value = '7. Aporte al proyecto acorde al nivel académico.'
  workSheet.getCell('L30').alignment = {horizontal:'left', wrapText:true, vertical:'middle'}

  workSheet.mergeCells('L31:Q32')
  workSheet.getCell('L31').value = 'Promedio Parcial del Proyecto Empresarial:'
  workSheet.getCell('L31').alignment = {horizontal:'right'}

  workSheet.mergeCells('L33:Q34')
  workSheet.getCell('L33').value = 'Nota ponderada sobre 7 puntos:'
  workSheet.getCell('L33').alignment = {horizontal:'right'}


  workSheet.mergeCells('R15:R16')
  workSheet.getCell('R15').value = 'NOTA'

  workSheet.mergeCells('R17:R18')
  workSheet.getCell('R17').value = 10

  workSheet.mergeCells('R19:R20')
  workSheet.getCell('R19').value = 10

  workSheet.mergeCells('R21:R22')
  workSheet.getCell('R21').value = 10

  workSheet.mergeCells('R23:R24')
  workSheet.getCell('R23').value = 10

  workSheet.mergeCells('R25:R26')
  workSheet.getCell('R25').value = 10

  workSheet.mergeCells('R27:R28')
  workSheet.getCell('R27').value = 10

  workSheet.mergeCells('R29:R30')
  workSheet.getCell('R30').value = 10

  workSheet.mergeCells('R31:R32')
  workSheet.getCell( 'R31' ).numFmt = '0.00';
  workSheet.getCell('R31').value = {formula:'AVERAGE(R17:R30)'}

  workSheet.mergeCells('R33:R34')
  workSheet.getCell( 'R33' ).numFmt = '0.00';
  workSheet.getCell('R33').value = {formula:'R31 * 0.7'}


















  workBook.xlsx.writeBuffer()
    .then( ( buffer ) => {
      const blob = new Blob( [ buffer ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } );
      fileSaver.saveAs( blob, 'InformeApredizaje.xlsx' );
    } )
    .catch( ( error ) => {
      console.error( 'Error al guardar el archivo:', error );
    } );

}
