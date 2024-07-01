import { DocumentProps } from '../models/documents-Props';
import * as exceljs from 'exceljs';

export function createDocument6( { exceljs, fileSaver, logoImage, instituteName, company, firstName, secondName, lastName, secondLastName, dni, academicTutor, businessTutor, electivePeriod, academicPeriod, career }: DocumentProps ) {
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

    workSheet.getCell( 'D6' ).value = company;
    workSheet.getCell( 'D7' ).value = [ firstName, secondName, lastName, secondLastName ].join( ' ' );
    workSheet.getCell( 'D8' ).value = dni;
    workSheet.getCell( 'D6' ).value = academicTutor;
    workSheet.getCell( 'D6' ).value = businessTutor;
    workSheet.getCell( 'L6' ).value = academicPeriod;
    workSheet.getCell( 'L7' ).value = electivePeriod;
    workSheet.getCell( 'L10' ).value = career;

    workSheet.getCell( 'D6' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'D7' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'D8' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'D6' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'D6' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'L6' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'L7' ).alignment = { horizontal: 'center', vertical: 'middle' };
    workSheet.getCell( 'L10' ).alignment = { horizontal: 'center', vertical: 'middle' };



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

    workSheet.mergeCells( 'A15:S15' );
    workSheet.getCell( 'A15' ).value = 'INFORME DE APRENDIZAJE DE LA FASE PRÁCTICA';
    workSheet.getCell( 'A15' ).alignment = { vertical: 'middle', horizontal: 'center' };
    workSheet.getCell( 'A15' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

    workSheet.getCell( 'A16' ).value = 'SEMANA';
    workSheet.getCell( 'A16' ).alignment = { vertical: 'middle', horizontal: 'center' };

    workSheet.mergeCells( 'B16:D16' );
    workSheet.getCell( 'B16' ).value = 'FECHA';
    workSheet.getCell( 'B16' ).alignment = { vertical: 'middle', horizontal: 'center' };

    workSheet.mergeCells( 'E16:G16' );
    workSheet.getCell( 'E16' ).value = 'PUESTO DE APRENDIZAJE';
    workSheet.getCell( 'E16' ).alignment = { vertical: 'middle', horizontal: 'center' };

    workSheet.mergeCells( 'H16:M16' );
    workSheet.getCell( 'H16' ).value = 'ACTIVIDADES REALIZADAS';
    workSheet.getCell( 'H16' ).alignment = { vertical: 'middle', horizontal: 'center' };

    workSheet.mergeCells( 'N16:S16' );
    workSheet.getCell( 'N16' ).value = 'ACTIVIDADES AUTÓNOMAS';
    workSheet.getCell( 'N16' ).alignment = { vertical: 'middle', horizontal: 'center' };


    for ( let row = 15; row <= 28; row++ ) {
        for ( let col = 1; col <= 19; col++ ) {
            applyBorder( workSheet.getCell( row, col ) );
            const cell = workSheet.getCell( 15, col );
            cell.font = { bold: true };
        }
    }

    for ( let row = 17, i = 1; row <= 24; row++ ) {
        workSheet.getCell( `A${ row }` ).value = i++;
        workSheet.getCell( `A${ row }` ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };


        workSheet.mergeCells( `B${ row }:D${ row }` );
        workSheet.getCell( `B${ row }` ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        workSheet.getCell( `B${ row }` ).value = '02/01/2024 – 06/01/2024';

        workSheet.mergeCells( `E${ row }:G${ row }` );
        workSheet.getCell( `E${ row }` ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        workSheet.getCell( `E${ row }` ).value = 'Teletrabajo';

        workSheet.mergeCells( `H${ row }:M${ row }` );
        workSheet.getCell( `H${ row }` ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
        workSheet.getCell( `H${ row }` ).value = 'Creación del documento técnico para bajar el proyecto, así mismo como para realizar cambios';

        workSheet.mergeCells( `N${ row }:S${ row }` );
        workSheet.getCell( `N${ row }` ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
        workSheet.getCell( `N${ row }` ).value = 'Revisión a profundidad del proyecto para solucionar errores, además de cierta investigación sobre JWT en NestJs para implementar sus mejoras dentro del sistema';

        workSheet.getRow( row ).height = 60;
    }

    workSheet.mergeCells( 'A25:D28' );
    workSheet.getCell( 'A25' ).value = 'Reflexión sobre el aprendizaje alcanzado de las actividades realizadas en la empresa formadora.';
    workSheet.getCell( 'A25' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
    workSheet.getCell( 'A25' ).font = { bold: true };
    workSheet.getCell( 'A25' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

    workSheet.mergeCells( 'E25:K28' );
    workSheet.getCell( 'E25' ).value = 'Reflexión';
    workSheet.getCell( 'E25' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF000' } };
    workSheet.getCell( 'E25' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

    workSheet.mergeCells( 'L25:O28' );
    workSheet.getCell( 'L25' ).value = 'Observaciones de la empresa formadora sobre el desempeño del estudiante:';
    workSheet.getCell( 'L25' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
    workSheet.getCell( 'L25' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    workSheet.getCell( 'L25' ).font = { bold: true };

    workSheet.mergeCells( 'P25:S28' );

    workBook.xlsx.writeBuffer()
        .then( ( buffer ) => {
            const blob = new Blob( [ buffer ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } );
            fileSaver.saveAs( blob, 'InformeApredizaje.xlsx' );
        } )
        .catch( ( error ) => {
            console.error( 'Error al guardar el archivo:', error );
        } );
}

