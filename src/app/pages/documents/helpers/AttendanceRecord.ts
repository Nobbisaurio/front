import * as fs from 'file-saver';
import { DocumentProps } from '../models/documents-Props';
import * as exceljs from 'exceljs';

export function createDocument8({
  fileSaver,
  exceljs,
  version,
  elaborationDate,
  code,
  process,
  updateDate,
  docName,
  instituteName,
  structuringCore,
  logoImage,
  company,
  dni,
  firstName,
  secondName,
  lastName,
  secondLastName,
  academicTutor,
  businessTutor,
  email,
  career,
  academicPeriod,
  electivePeriod,
}: DocumentProps) {
  const workBook = new exceljs.Workbook();
  const workSheet = workBook.addWorksheet('Registro de Asistencia');
  workSheet.pageSetup = {
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 1,
    orientation: 'portrait',
  };
  const applyBorder = (cell: exceljs.Cell) => {
    cell.border = {
      top: { style: 'thin', color: { argb: 'FF000000' } },
      left: { style: 'thin', color: { argb: 'FF000000' } },
      bottom: { style: 'thin', color: { argb: 'FF000000' } },
      right: { style: 'thin', color: { argb: 'FF000000' } },
    };
  };

  // const logo = workBook.addImage({
  // base64: await logoImage,
  // extension: 'png'
  // })

  workSheet.mergeCells('A1:C4');
  // workSheet.addImage( logo, 'A1:C4')
  workSheet.getColumn('A').width = 5;

  workSheet.mergeCells('D1:J1');
  workSheet.getCell('D1').value = instituteName;
  workSheet.getRow(1).height = 40;
  workSheet.getCell('D1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: '3366ff' },
  };

  workSheet.mergeCells('D2:J2');
  workSheet.getCell('D2').value = 'MACROPROCESO 01 DOCENCIA';

  workSheet.mergeCells('D3:J3');
  workSheet.getCell('D3').value = process;
  workSheet.getCell('D3').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'e6802c' },
  };
  workSheet.getRow(3).height = 40;

  workSheet.mergeCells('D4:J4');
  workSheet.getCell('D4').value = docName;

  workSheet.getColumn('K').width = 15;
  workSheet.getColumn('L').width = 15;
  workSheet.getCell('K1').value = 'VERSIÓN';
  workSheet.getCell('L1').value = version;

  workSheet.getCell('K2').value = 'ELABORACIÓN';
  workSheet.getCell('L2').value = elaborationDate;

  workSheet.getCell('K3').value = 'ACTUALIZACIÓN';
  workSheet.getCell('L3').value = updateDate;

  workSheet.getCell('K4').value = 'CÓDIGO';
  workSheet.getCell('L4').value = code;

  const usedCells = workSheet.getSheetValues();

  for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 12; col++) {
      applyBorder(workSheet.getCell(row, col));
      const cell = workSheet.getCell(row, col);
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center',
        wrapText: true,
      };
    }
  }

  workSheet.getRow(5).height = 10;

  for (let row = 6; row <= 12; row++) {
    workSheet.mergeCells(`A${row}:C${row}`);
    workSheet.getCell(`A${row}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'bfbfbf' },
    };
    workSheet.getCell(`A${row}`).font = { bold: true };

    workSheet.mergeCells(`D${row}:F${row}`);
    workSheet.getCell(`D${row}`).alignment = { horizontal: 'center' };

    workSheet.mergeCells(`G${row}:I${row}`);
    workSheet.getCell(`G${row}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'bfbfbf' },
    };
    workSheet.getCell(`G${row}`).font = { bold: true };

    workSheet.mergeCells(`J${row}:L${row}`);
    workSheet.getCell(`J${row}`).alignment = { horizontal: 'center' };

    for (let col = 1; col <= 12; col++) {
      applyBorder(workSheet.getCell(row, col));
      const cell = workSheet.getCell(row, col);
      cell.alignment = { vertical: 'middle', wrapText: true };
    }
  }

  workSheet.getCell('A6').value = 'EMPRESA FORMADORA:';
  workSheet.getCell('A7').value = 'TUTOR(A) ACADÉMICO:';
  workSheet.getCell('A8').value = 'TUTOR(A) EMPRESARIAL:';
  workSheet.getCell('A9').value = 'NOMBRE DEL ESTUDIANTE:';
  workSheet.getRow(9).height = 40;

  workSheet.getCell('A10').value = 'E-MAIL INSTITUCIONAL:';
  workSheet.getCell('A11').value = 'TELÉFONO / MÓVIL:';
  workSheet.getCell('A12').value = 'CÉDULA:';

  workSheet.getCell('D6').value = company;
  workSheet.getCell('D7').value = academicTutor;
  workSheet.getCell('D8').value = businessTutor;
  workSheet.getCell('D9').value = [
    firstName,
    secondName,
    lastName,
    secondLastName,
  ].join(' ');
  workSheet.getCell('D10').value = email;
  workSheet.getCell('D11').value = 'TELÉFONO / MÓVIL:';
  workSheet.getCell('D12').value = dni;

  workSheet.getCell('G6').value = 'CARRERA:';
  workSheet.getCell('G7').value = 'PERÍODO ACADÉMICO:';
  workSheet.getCell('G8').value = 'NIVEL:';
  workSheet.getCell('G9').value = 'NÚCLEO ESTRUCTURANTE:';
  workSheet.getCell('G10').value = 'TELÉFONO DE EMERGENCIA:';
  workSheet.getCell('G11').value = 'CONTACTO DE EMERGENCIA:';
  workSheet.getCell('G12').value = 'TIPO DE SANGRE:';

  workSheet.getCell('J6').value = career;
  workSheet.getCell('J7').value = electivePeriod;
  workSheet.getCell('J8').value = academicPeriod;
  workSheet.getCell('J9').value = structuringCore;
  workSheet.getCell('J10').value = 'TELÉFONO DE EMERGENCIA:';
  workSheet.getCell('J11').value = 'CONTACTO DE EMERGENCIA:';
  workSheet.getCell('J12').value = 'TIPO DE SANGRE:';

  workSheet.getRow(13).height = 10;

  workSheet.getCell('A14').value = 'N°';
  workSheet.getCell('B14').value = 'Fecha';
  workSheet.getCell('D14').value = 'Hola ingreso';
  workSheet.getCell('E14').value = 'Almuerzo';
  workSheet.getCell('F14').value = 'Hora salida';
  workSheet.getCell('G14').value = 'Horas al día';
  workSheet.getCell('H14').value = 'Firma estudiante';
  workSheet.getCell('K14').value = 'Observaciones';

  for (let row = 14; row <= 50; row++) {
    workSheet.mergeCells(`B${row}:C${row}`);
    workSheet.mergeCells(`H${row}:J${row}`);
    workSheet.mergeCells(`K${row}:L${row}`);

    for (let col = 1; col <= 12; col++) {
      applyBorder(workSheet.getCell(row, col));
      const cell = workSheet.getCell(row, col);
      cell.alignment = {
        vertical: 'middle',
        wrapText: true,
        horizontal: 'center',
      };
    }
  }
  for (let row = 15, i = 1; row <= 50; row++) {
    workSheet.getCell(`A${row}`).value = i++;

    workSheet.getCell(`B${row}`).value = '02/01/2024';
    workSheet.getCell(`B${row}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFF000' },
    };

    workSheet.getCell(`D${row}`).value = '8:00';

    workSheet.getCell(`E${row}`).value = '13:00';

    workSheet.getCell(`F${row}`).value = '17:00';

    workSheet.getCell(`G${row}`).value = 8;

    workSheet.getRow(row).height = 30;

    for (let col = 1; col <= 12; col++) {
      applyBorder(workSheet.getCell(row, col));
      const cell = workSheet.getCell(row, col);
      cell.alignment = {
        vertical: 'middle',
        wrapText: true,
        horizontal: 'center',
      };
    }
  }

  workSheet.getCell('B50').value = '12/02/2024 – 23/02/2024';
  workSheet.getCell(`D50`).value = '8:00';
  workSheet.getCell(`E50`).value = '13:00';
  workSheet.getCell(`F50`).value = '17:00';
  workSheet.getCell(`G50`).value = 10;
  workSheet.getCell(`K50`).value = 'HORAS AUTONOMAS';

  for (let row = 51; row <= 52; row++) {
    for (let col = 4; col <= 7; col++) {
      applyBorder(workSheet.getCell(row, col));
      const cell = workSheet.getCell(row, col);
      cell.alignment = {
        vertical: 'middle',
        wrapText: true,
        horizontal: 'center',
      };
    }
  }

  workSheet.getRow(50).height = 40;

  workSheet.mergeCells('D51:F52');
  workSheet.getCell('D51').value = 'SUBTOTAL HORAS FASE PRÁCTICA:';
  workSheet.getCell('D51').font = { bold: true };
  workSheet.mergeCells('G51:G52');
  workSheet.getCell('G51').value = { formula: 'Sum(G15:G50)' };

  workBook.xlsx
    .writeBuffer()
    .then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fileSaver.saveAs(blob, 'Registro de Asistencia.xlsx');
    })
    .catch((error) => {
      console.error('Error al guardar el archivo:', error);
    });
}
