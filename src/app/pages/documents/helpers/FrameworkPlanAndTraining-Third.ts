import { DocumentProps } from '../models/documents-Props';
import * as exceljs from 'exceljs';

export function createDocument11( { exceljs, fileSaver, instituteName, logoImage, career, company, electivePeriod, academicPeriod, firstName, secondName, lastName, secondLastName, businessTutor, academicTutor }: DocumentProps ) {

  const workBook = new exceljs.Workbook();
  const workSheet1 = workBook.addWorksheet( 'PLAN MARCO' );
  workSheet1.pageSetup = {
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 2 ,
    orientation: 'landscape'
  };


  // const logo1 = workBook.addImage({
  // base64: await logoImage,
  // extension: 'png'
  // })

  workSheet1.mergeCells( 'A1:B4' );
  // workSheet1.addImage( logo1, 'A1:B4')

  workSheet1.mergeCells( 'C1:Q1' );
  workSheet1.getCell( 'C1' ).value = instituteName;
  workSheet1.getCell( 'C1' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '3366ff' } };

  workSheet1.mergeCells( 'C2:Q2' );
  workSheet1.getCell( 'C2' ).value = 'MACROPROCESO 01 DOCENCIA';

  workSheet1.mergeCells( 'C3:Q3' );
  workSheet1.getCell( 'C3' ).value = 'PROCESO 02 PROCESO DE FORMACIÓN PRÁCTICA EN EL ENTORNO LABORAL REAL  - FORMACIÓN DUAL';
  workSheet1.getCell( 'C3' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'e6802c' } };

  workSheet1.mergeCells( 'C4:Q4' );
  workSheet1.getCell( 'C4' ).value = 'FORMATO 06 BITÁCORA DE APRENDIZAJE DE FASE PRÁCTICA';


  workSheet1.getColumn( 'R' ).width = 15;
  workSheet1.getColumn( 'S' ).width = 15;
  workSheet1.getCell( 'R1' ).value = 'VERSIÓN';
  workSheet1.getCell( 'S1' ).value = '1.0';

  workSheet1.getCell( 'R2' ).value = 'ELABORACIÓN';
  workSheet1.getCell( 'S2' ).value = '06-06-2023';

  workSheet1.getCell( 'R3' ).value = 'ACTUALIZACIÓN';
  workSheet1.getCell( 'S3' ).value = '06-06-2023';

  workSheet1.getCell( 'R4' ).value = 'CÓDIGO';
  workSheet1.getCell( 'S4' ).value = 'DS-010206';


  const usedCells = workSheet1.getSheetValues();


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
      applyBorder( workSheet1.getCell( row, col ) );
      const cell = workSheet1.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet1.mergeCells( 'A5:S5' );
  workSheet1.getRow( 5 ).height = 40;

  for ( let row = 6; row <= 14; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet1.getCell( row, col ) );
      const cell = workSheet1.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    }
  }

  for ( let row = 6; row <= 9; row++ ) {
    workSheet1.mergeCells( `A${ row }:D${ row }` );
  }

  workSheet1.getCell( 'A6' ).value = 'NOMBRE(S) DE ESTUDIANTE(S):';
  workSheet1.getCell( 'A6' ).font = { bold: true };
  workSheet1.getCell( 'A7' ).value = 'CARRERA:';
  workSheet1.getCell( 'A7' ).font = { bold: true };
  workSheet1.getCell( 'A8' ).value = 'EMPRESA FORMADORA:';
  workSheet1.getCell( 'A8' ).font = { bold: true };
  workSheet1.getCell( 'A9' ).value = 'PERÍODO LECTIVO:';
  workSheet1.getCell( 'A9' ).font = { bold: true };

  workSheet1.mergeCells( 'E6:S6' );

  for ( let row = 7; row <= 9; row++ ) {
    workSheet1.mergeCells( `E${ row }:L${ row }` );
  }
  workSheet1.getCell( 'E6' ).value = [ firstName, secondName, lastName, secondLastName ].join( ' ' );
  workSheet1.getCell( 'E7' ).value = `TECNOLOGIA SUPERIOR EN ${ career }`;
  workSheet1.getCell( 'E8' ).value = company;
  workSheet1.getCell( 'E9' ).value = electivePeriod;


  for ( let row = 7; row <= 9; row++ ) {
    workSheet1.mergeCells( `M${ row }:P${ row }` );
  }

  workSheet1.getCell( 'M7' ).value = `PERÍODO ACADÉMICO/NIVEL:`;
  workSheet1.getCell( 'M7' ).font = { bold: true };
  workSheet1.getCell( 'M8' ).value = 'HORAS DE FORMACIÓN PRÁCTICA:';
  workSheet1.getCell( 'M8' ).font = { bold: true };
  workSheet1.getCell( 'M9' ).value = 'NÚCLEO ESTRUCTURANTE:';
  workSheet1.getCell( 'M9' ).font = { bold: true };

  for ( let row = 7; row <= 9; row++ ) {
    workSheet1.mergeCells( `Q${ row }:S${ row }` );
  }

  workSheet1.getCell( 'Q7' ).value = academicPeriod;
  workSheet1.getCell( 'Q8' ).value = 290;
  workSheet1.getCell( 'Q9' ).value = 'FUNDAMENTOS DE PROGRAMACIÓN';

  for ( let row = 10; row <= 14; row++ ) {
    workSheet1.mergeCells( `A${ row }:S${ row }` );
  }

  workSheet1.getCell( 'A10' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  workSheet1.getRow( 10 ).height = 40;
  workSheet1.getCell( 'A10' ).value = 'NIVELES DE CONOCIMIENTO';

  workSheet1.getCell( 'A11' ).value = '1: CONOCIMIENTOS BÁSICOS: El estudiante de la carrera dual debe familiarizarse con los contenidos y relaciones del área, de tal forma que pueda nombrarlos y diferenciarlos.';
  workSheet1.getCell( 'A12' ).value = '2: CONOCIMIENTOS: El estudiante de la carrera dual se debe formar en las competencias del área, hasta el punto que las pueda aclarar y pueda dar información sobre las mismas.';
  workSheet1.getCell( 'A13' ).value = '3: PARTICIPACION EN LOS PROCEDIMIENTOS: El estudiante de la carrera dual debe adquirir las suficientes capacidades prácticas de tal forma que pueda realizar las tareas o pueda preparar su ejecución.';
  workSheet1.getRow( 14 ).height = 35;
  workSheet1.getCell( 'A14' ).value = '4: VALORACIÓN O ELABORACIÓN PROPIA DE PROCEDIMIENTOS DE TRABAJO: El estudiante de la carrera dual, se debe formar en la aplicación práctica, de tal forma que pueda realizar o elaborar las tareas sin indicaciones y además pueda evaluar una tarea de acuerdo a su criterio.';

  workSheet1.mergeCells( 'A15:S15' );
  workSheet1.getRow( 15 ).height = 20;


  for ( let row = 16; row <= 16; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet1.getCell( row, col ) );
      const cell = workSheet1.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    }
  }
  workSheet1.mergeCells( 'A16:S16' );
  workSheet1.getRow( 16 ).height = 30;
  workSheet1.getCell( 'A16' ).value = 'OBJETIVOS DE LA FASE PRÁCTICA: Aplicar de forma autónoma la lógica de programación para el desarrollo de algoritmos sencillos  utilizando una sintaxis adecuada.';
  workSheet1.getCell( 'A16' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet1.mergeCells( 'A17:S17' );
  workSheet1.getCell( 'A17' ).value = 'OBJETIVOS DE APRENDIZAJE: Al finalizar la fase práctica, el/la estudiante estará en capacidad de:';

  for ( let row = 18; row <= 53; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet1.getCell( row, col ) );
      const cell = workSheet1.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      cell.font = { size: 9 };
    }
  }


  workSheet1.mergeCells( 'A18:A20' );
  workSheet1.getCell( 'A18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.getCell( 'A18' ).value = 'No.';

  for ( let row = 21, i = 1; row <= 53; row++ ) {
    workSheet1.mergeCells( `A${ row }:A${ row }` );
    workSheet1.getCell( `A${ row }` ).value = i++;
    workSheet1.getRow( row ).height = 30;
  }


  workSheet1.mergeCells( 'B18:G20' );
  workSheet1.getCell( 'B18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.getCell( 'B18' ).value = 'Objetivos de aprendizaje';

  for ( let row = 21; row <= 53; row++ ) {
    workSheet1.mergeCells( `B${ row }:G${ row }` );
  }

  workSheet1.getCell( 'B21' ).value = 'Crear páginas web dinámicas utilizando la arquitectura cliente - servidor.';
  workSheet1.getCell( 'B21' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B22' ).value = 'Aplicar métodos criptográficos.';
  workSheet1.getCell( 'B22' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B23' ).value = 'Aplicar modelos matemáticos para la resolución de problemas informáticos, técnicos, de las ciencias básicas y administrativas.';
  workSheet1.getCell( 'B23' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B24' ).value = 'Utilizar frameworks de diseño y hojas de estilo en cascada aplicadas a páginas web estáticas.';
  workSheet1.getCell( 'B24' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B25' ).value = 'Elaborar documentos de soporte para usuarios.';
  workSheet1.getCell( 'B25' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B26' ).value = 'Identificar procesos continuos y discontinuos.';
  workSheet1.getCell( 'B26' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B27' ).value = 'Diagramar modelos entidad-relación de situaciones empresariales reales.';
  workSheet1.getCell( 'B27' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B28' ).value = 'Analizar procesos discretos con ayuda de sucesiones y series matemáticas.';
  workSheet1.getCell( 'B28' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B29' ).value = 'Realizar la modelación de objetos, con un lenguaje de marcado estandarizado.';
  workSheet1.getCell( 'B29' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B30' ).value = 'Desarrollar una estrategia para solucionar problemas con la ayuda de métodos estandarizados.';
  workSheet1.getCell( 'B30' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B31' ).value = 'Crear bases de datos estructuradas con la ayuda de un lenguaje estandarizado.';
  workSheet1.getCell( 'B31' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B32' ).value = 'Distinguir y clasificar lenguajes de programación.';
  workSheet1.getCell( 'B32' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B33' ).value = 'Analizar la complejidad de algoritmos al respecto de tiempo de ejecución, espacio de memoria y propensión a errores, y dictamen del esfuerzo de la programación.';
  workSheet1.getCell( 'B33' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B34' ).value = 'Realizar diagramas de clases con un método estandarizado.';
  workSheet1.getCell( 'B34' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B35' ).value = 'Programar con lenguaje estandarizado, orientado a objetos, para la definición, manipulación y gestión de datos.';
  workSheet1.getCell( 'B35' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B36' ).value = 'Programar un API REST';
  workSheet1.getCell( 'B36' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B37' ).value = 'Diseñar interfases de usuario (UX)';
  workSheet1.getCell( 'B37' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B38' ).value = 'Gestionar la información almacenada en una base de datos usando lenguaje estandarizado de consultas.';
  workSheet1.getCell( 'B38' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B39' ).value = 'Aplicar un entorno de programación (plataforma) para la programación.';
  workSheet1.getCell( 'B39' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B40' ).value = 'Considerar los derechos y obligaciones de la relación de formación entre empresa formadora y estudiante.';
  workSheet1.getCell( 'B40' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B41' ).value = 'Considerar los reglamentos legales y reglamentos internos de la empresa formadora.';
  workSheet1.getCell( 'B41' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B42' ).value = 'Abstraer situaciones empresariales diarias y hasta convertirlas en figuras, diagramas o relaciones.';
  workSheet1.getCell( 'B42' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B43' ).value = 'Elegir algoritmos en la realización de pliegos de condiciones, en particular los conceptos básicos como secuencias, selección e iteración.';
  workSheet1.getCell( 'B43' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B44' ).value = 'Describir tareas, organización y estructuras de decisiones en la empresa.';
  workSheet1.getCell( 'B44' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B45' ).value = 'Describir la forma legal de la empresa formadora.';
  workSheet1.getCell( 'B45' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B46' ).value = 'Describir la relación de la empresa formadora con las organizaciones del sector productivo, gremios e instituciones públicas.';
  workSheet1.getCell( 'B46' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B47' ).value = 'Explicar el objetivo y los campos de actividad de la empresa formadora y su posición en el mercado.';
  workSheet1.getCell( 'B47' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B48' ).value = 'Conocer las claúsulas fundamentales del contrato de formación dual entre la empresa formadora y la IES.';
  workSheet1.getCell( 'B48' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B49' ).value = 'Desarrollar la disposición del aprendizaje continuo e investigar las posibilidades de capacitación y formación continua.';
  workSheet1.getCell( 'B49' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B50' ).value = 'Analizar riesgos de trabajo en la empresa, para prevenir accidentes.';
  workSheet1.getCell( 'B50' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B51' ).value = 'Aplicar plan de contingencia en caso de un desastre (incendio, accidente, fenómenos naturales, etc.).';
  workSheet1.getCell( 'B51' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B52' ).value = 'Contribuir a la preservación del medio ambiente y reducir riesgos del trabajo del estudiante y la empresa.';
  workSheet1.getCell( 'B52' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.getCell( 'B53' ).value = 'Proponer medidas para la optimización de procesos en el desarrollo y organización de la empresa.';
  workSheet1.getCell( 'B53' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };

  workSheet1.mergeCells( 'H18:K18' );
  workSheet1.getCell( 'H18' ).value = 'Nivel de Logro esperado';
  workSheet1.getCell( 'H18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet1.mergeCells( 'H19:K19' );
  workSheet1.getCell( 'H19' ).value = '(ponga una X en el número correspondiente)';
  workSheet1.getCell( 'H19' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet1.getCell( 'H20' ).value = 1;
  workSheet1.getCell( 'I20' ).value = 2;
  workSheet1.getCell( 'J20' ).value = 3;
  workSheet1.getCell( 'K20' ).value = 4;


  workSheet1.mergeCells( 'L18:L19' );
  workSheet1.getCell( 'L18' ).value = 'Nivel real alcanzado';
  workSheet1.getCell( 'L18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet1.mergeCells( 'L20:L20' );
  workSheet1.getCell( 'L20' ).numFmt = '0.00';
  workSheet1.getCell( 'L20' ).value = { formula: 'AVERAGE(L21:L34)' };
  workSheet1.getCell( 'L20' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  for ( let row = 21; row <= 53; row++ ) {
    workSheet1.getCell( `L${ row }` ).value = { formula: `COUNTA(H${ row }:K${ row })` };

  }

  workSheet1.mergeCells( 'M18:O20' );
  workSheet1.getCell( 'M18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.getCell( 'M18' ).value = 'Tareas laborales de aprendizaje a realizar para alcanzar el objetivo';


  for (let row = 21; row <=53; row++) {
    workSheet1.mergeCells(`M${row}:O${row}`)
  }


  workSheet1.mergeCells( 'P18:Q20' );
  workSheet1.getCell( 'P18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.getCell( 'P18' ).value = 'Puesto de aprendizaje (área o departamento de la empresa)';

  workSheet1.mergeCells( 'P21:Q31' );
  workSheet1.getCell( 'P21' ).value = 'Ejm.:TICS';

  workSheet1.mergeCells( 'P32:Q42' );
  workSheet1.getCell( 'P32' ).value = 'Ejm.:TICS';

  workSheet1.mergeCells( 'P43:Q53' );
  workSheet1.getCell( 'P44' ).value = 'Ejm.:TICS';


  workSheet1.mergeCells( 'R18:R20' );
  workSheet1.getCell( 'R18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.getCell( 'R18' ).value = 'No. de semanas de trabajo';

  workSheet1.mergeCells( 'R21:R31' );
  workSheet1.getCell( 'R21' ).value = 2;

  workSheet1.mergeCells( 'R32:R42' );
  workSheet1.getCell( 'R32' ).value = 1;

  workSheet1.mergeCells( 'R43:R53' );
  workSheet1.getCell( 'R44' ).value = 1;

  workSheet1.mergeCells( 'S18:S20' );
  workSheet1.getCell( 'S18' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet1.getCell( 'S18' ).value = 'Responsable del puesto de aprendizaje';

  workSheet1.mergeCells( 'S21:S31' );
  workSheet1.getCell( 'S21' ).value = 'Ejm.:  René Rivas Jefe de Operaciones';

  workSheet1.mergeCells( 'S32:S42' );
  workSheet1.getCell( 'S32' ).value = 'Ejm.:  René Rivas Jefe de Operaciones';

  workSheet1.mergeCells( 'S43:S53' );
  workSheet1.getCell( 'S43' ).value = 'Ejm.:  René Rivas Jefe de Operaciones';


  workSheet1.mergeCells( 'A54:A54' );
  workSheet1.getCell( 'A54' ).value = 'NOTA: Puede agregar más objetivos de ser necesario o redactar de acuerdo a las necesidades particulares de cada Empresa Formadora. También puede eliminar los objetivos que no apliquen para la fase práctica.';
  workSheet1.getCell( 'A54' ).font = { size: 9, bold: true };


  workSheet1.mergeCells( 'B56:F56' );
  workSheet1.getCell( 'B56' ).value = 'Tutor Académico del ISTY';

  workSheet1.mergeCells( 'B57:F57' );
  workSheet1.getCell( 'B57' ).value = `Nombre: ${ businessTutor }`;

  workSheet1.mergeCells( 'B58:F60' );
  workSheet1.getCell( 'B58' ).value = 'Firma:' + '_'.repeat( 35 );


  workSheet1.mergeCells( 'K56:O56' );
  workSheet1.getCell( 'K56' ).value = 'Tutor Empresarial de la Empresa Formadora';

  workSheet1.mergeCells( 'K57:O57' );
  workSheet1.getCell( 'K57' ).value = `Nombre: ${ academicTutor }`;

  workSheet1.mergeCells( 'K58:O60' );
  workSheet1.getCell( 'K58' ).value = 'Firma:' + '_'.repeat( 35 );


  const workSheet2 = workBook.addWorksheet( 'PLAN ROTACION' );
  workSheet2.pageSetup = {
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 2,
    orientation: 'landscape'
  };


  // const logo2 = workBook.addImage({
  // base64: await logoImage,
  // extension: 'png'
  // })

  workSheet2.mergeCells( 'A1:B4' );
  // workSheet2.addImage( logo2, 'A1:B4')

  workSheet2.mergeCells( 'C1:Q1' );
  workSheet2.getCell( 'C1' ).value = instituteName;
  workSheet2.getCell( 'C1' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '3366ff' } };

  workSheet2.mergeCells( 'C2:Q2' );
  workSheet2.getCell( 'C2' ).value = 'MACROPROCESO 01 DOCENCIA';

  workSheet2.mergeCells( 'C3:Q3' );
  workSheet2.getCell( 'C3' ).value = 'PROCESO 02 PROCESO DE FORMACIÓN PRÁCTICA EN EL ENTORNO LABORAL REAL  - FORMACIÓN DUAL';
  workSheet2.getCell( 'C3' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'e6802c' } };

  workSheet2.mergeCells( 'C4:Q4' );
  workSheet2.getCell( 'C4' ).value = 'FORMATO 06 BITÁCORA DE APRENDIZAJE DE FASE PRÁCTICA';


  workSheet2.getColumn( 'R' ).width = 15;
  workSheet2.getColumn( 'S' ).width = 15;
  workSheet2.getCell( 'R1' ).value = 'VERSIÓN';
  workSheet2.getCell( 'S1' ).value = '1.0';

  workSheet2.getCell( 'R2' ).value = 'ELABORACIÓN';
  workSheet2.getCell( 'S2' ).value = '06-06-2023';

  workSheet2.getCell( 'R3' ).value = 'ACTUALIZACIÓN';
  workSheet2.getCell( 'S3' ).value = '06-06-2023';

  workSheet2.getCell( 'R4' ).value = 'CÓDIGO';
  workSheet2.getCell( 'S4' ).value = 'DS-010206';


  for ( let row = 1; row <= 4; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet2.getCell( row, col ) );
      const cell = workSheet2.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }

  workSheet2.mergeCells( 'A5:S5' );
  workSheet2.getRow( 5 ).height = 20;

  for ( let row = 6; row <= 9; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet2.getCell( row, col ) );
      const cell = workSheet2.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    }
  }

  for ( let row = 6; row <= 9; row++ ) {
    workSheet2.mergeCells( `A${ row }:D${ row }` );
  }

  workSheet2.getCell( 'A6' ).value = 'NOMBRE(S) DE ESTUDIANTE(S):';
  workSheet2.getCell( 'A6' ).font = { bold: true };
  workSheet2.getCell( 'A7' ).value = 'CARRERA:';
  workSheet2.getCell( 'A7' ).font = { bold: true };
  workSheet2.getCell( 'A8' ).value = 'EMPRESA FORMADORA:';
  workSheet2.getCell( 'A8' ).font = { bold: true };
  workSheet2.getCell( 'A9' ).value = 'PERÍODO LECTIVO:';
  workSheet2.getCell( 'A9' ).font = { bold: true };

  workSheet2.mergeCells( 'E6:S6' );

  for ( let row = 7; row <= 9; row++ ) {
    workSheet2.mergeCells( `E${ row }:L${ row }` );
  }
  workSheet2.getCell( 'E6' ).value = [ firstName, secondName, lastName, secondLastName ].join( ' ' );
  workSheet2.getCell( 'E7' ).value = `TECNOLOGIA SUPERIOR EN ${ career }`;
  workSheet2.getCell( 'E8' ).value = company;
  workSheet2.getCell( 'E9' ).value = electivePeriod;


  for ( let row = 7; row <= 9; row++ ) {
    workSheet2.mergeCells( `M${ row }:P${ row }` );
  }

  workSheet2.getCell( 'M7' ).value = `PERÍODO ACADÉMICO/NIVEL:`;
  workSheet2.getCell( 'M7' ).font = { bold: true };
  workSheet2.getCell( 'M8' ).value = 'HORAS DE FORMACIÓN PRÁCTICA:';
  workSheet2.getCell( 'M8' ).font = { bold: true };
  workSheet2.getCell( 'M9' ).value = 'NÚCLEO ESTRUCTURANTE:';
  workSheet2.getCell( 'M9' ).font = { bold: true };

  for ( let row = 7; row <= 9; row++ ) {
    workSheet2.mergeCells( `Q${ row }:S${ row }` );
  }

  workSheet2.getCell( 'Q7' ).value = academicPeriod;
  workSheet2.getCell( 'Q8' ).value = 290;
  workSheet2.getCell( 'Q9' ).value = 'FUNDAMENTOS DE PROGRAMACIÓN';

  workSheet2.mergeCells( 'A10:S10' );
  workSheet2.getRow( 10 ).height = 10;

  for ( let row = 11; row <= 45; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet2.getCell( row, col ) );
      const cell = workSheet2.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      cell.font = { size: 9 };
    }

  }

  workSheet2.mergeCells( 'A11:A12' );
  workSheet2.getCell( 'A11' ).font = { bold: true, size: 9 };
  workSheet2.getCell( 'A11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.getCell( 'A11' ).value = '#';

  for ( let row = 13, i = 1; row <= 45; row++ ) {
    workSheet2.getCell( `A${ row }` ).value = i++;
  }

  workSheet2.mergeCells( 'B11:H12' );
  workSheet2.getCell( 'B11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.getCell( 'B11' ).font = { bold: true, size: 9 };
  workSheet2.getCell( 'B11' ).value = 'Objetivos de aprendizaje';


  for ( let row = 13; row <= 45; row++ ) {
    workSheet2.mergeCells( `B${ row }:H${ row }` );
    workSheet2.getRow( row ).height = 30;
  }

  workSheet2.getCell( 'B13' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B13' ).value = { formula: "'PLAN MARCO'!B21" };

  workSheet2.getCell( 'B14' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B14' ).value = { formula: "'PLAN MARCO'!B22" };

  workSheet2.getCell( 'B15' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B15' ).value = { formula: "'PLAN MARCO'!B23" };

  workSheet2.getCell( 'B16' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B16' ).value = { formula: "'PLAN MARCO'!B24" };

  workSheet2.getCell( 'B17' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B17' ).value = { formula: "'PLAN MARCO'!B25" };

  workSheet2.getCell( 'B18' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B18' ).value = { formula: "'PLAN MARCO'!B26" };

  workSheet2.getCell( 'B19' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B19' ).value = { formula: "'PLAN MARCO'!B27" };

  workSheet2.getCell( 'B20' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B20' ).value = { formula: "'PLAN MARCO'!B28" };

  workSheet2.getCell( 'B21' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B21' ).value = { formula: "'PLAN MARCO'!B29" };

  workSheet2.getCell( 'B22' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B22' ).value = { formula: "'PLAN MARCO'!B30" };

  workSheet2.getCell( 'B23' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B23' ).value = { formula: "'PLAN MARCO'!B31" };

  workSheet2.getCell( 'B24' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B24' ).value = { formula: "'PLAN MARCO'!B32" };

  workSheet2.getCell( 'B25' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B25' ).value = { formula: "'PLAN MARCO'!B33" };

  workSheet2.getCell( 'B26' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B26' ).value = { formula: "'PLAN MARCO'!B34" };

  workSheet2.getCell( 'B27' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B27' ).value = { formula: "'PLAN MARCO'!B35" };

  workSheet2.getCell( 'B28' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B28' ).value = { formula: "'PLAN MARCO'!B36" };

  workSheet2.getCell( 'B29' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B29' ).value = { formula: "'PLAN MARCO'!B37" };

  workSheet2.getCell( 'B30' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B30' ).value = { formula: "'PLAN MARCO'!B38" };

  workSheet2.getCell( 'B31' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B31' ).value = { formula: "'PLAN MARCO'!B39" };

  workSheet2.getCell( 'B32' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B32' ).value = { formula: "'PLAN MARCO'!B40" };

  workSheet2.getCell( 'B33' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B33' ).value = { formula: "'PLAN MARCO'!B41" };

  workSheet2.getCell( 'B34' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B34' ).value = { formula: "'PLAN MARCO'!B42" };

  workSheet2.getCell( 'B35' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B35' ).value = { formula: "'PLAN MARCO'!B43" };

  workSheet2.getCell( 'B36' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B36' ).value = { formula: "'PLAN MARCO'!B44" };

  workSheet2.getCell( 'B37' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B37' ).value = { formula: "'PLAN MARCO'!B45" };

  workSheet2.getCell( 'B38' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B38' ).value = { formula: "'PLAN MARCO'!B46" };

  workSheet2.getCell( 'B39' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B39' ).value = { formula: "'PLAN MARCO'!B47" };

  workSheet2.getCell( 'B40' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B40' ).value = { formula: "'PLAN MARCO'!B48" };

  workSheet2.getCell( 'B41' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B41' ).value = { formula: "'PLAN MARCO'!B49" };

  workSheet2.getCell( 'B42' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B42' ).value = { formula: "'PLAN MARCO'!B50" };

  workSheet2.getCell( 'B43' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B43' ).value = { formula: "'PLAN MARCO'!B51" };

  workSheet2.getCell( 'B44' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B44' ).value = { formula: "'PLAN MARCO'!B52" };

  workSheet2.getCell( 'B45' ).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  workSheet2.getCell( 'B45' ).value = { formula: "'PLAN MARCO'!B53" };



  workSheet2.mergeCells( 'I11:K12' );
  workSheet2.getCell( 'I11' ).font = { bold: true, size: 9 };
  workSheet2.getCell( 'I11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };
  workSheet2.getCell( 'I11' ).value = 'Puesto de aprendizaje (área o departamento de la empresa)';

  workSheet2.mergeCells( 'I13:K23' );
  workSheet2.getCell( 'I13' ).value = 'Ejm.: Tics';
  workSheet2.mergeCells( 'I24:K34' );
  workSheet2.getCell( 'I24' ).value = 'Ejm.: Tics';
  workSheet2.mergeCells( 'I35:K45' );
  workSheet2.getCell( 'I35' ).value = 'Ejm.: Tics';

  workSheet2.getCell( 'L11' ).value = 'S1';
  workSheet2.getCell( 'L11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'L12' ).value = '15-19';
  workSheet2.getCell( 'L12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'M11' ).value = 'S2';
  workSheet2.getCell( 'M11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'M12' ).value = '15-19';
  workSheet2.getCell( 'M12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'N11' ).value = 'S3';
  workSheet2.getCell( 'N11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'N12' ).value = '15-19';
  workSheet2.getCell( 'N12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'O11' ).value = 'S4';
  workSheet2.getCell( 'O11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'O12' ).value = '15-19';
  workSheet2.getCell( 'O12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'P11' ).value = 'S5';
  workSheet2.getCell( 'P11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'P12' ).value = '15-19';
  workSheet2.getCell( 'P12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'Q11' ).value = 'S6';
  workSheet2.getCell( 'Q11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'Q12' ).value = '15-19';
  workSheet2.getCell( 'Q12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'R11' ).value = 'S7';
  workSheet2.getCell( 'R11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'R12' ).value = '15-19';
  workSheet2.getCell( 'R12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.getCell( 'S11' ).value = 'S8';
  workSheet2.getCell( 'S11' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bfbfbf' } };

  workSheet2.getCell( 'S12' ).value = '15-19';
  workSheet2.getCell( 'S12' ).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };

  workSheet2.mergeCells( 'A46:S46' );
  workSheet2.getCell( 'A46' ).value = 'COMPETENCIAS NECESARIAS';
  workSheet2.getCell( 'A46' ).font = { bold: true };
  workSheet2.getCell( 'A46' ).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  for ( let row = 47; row <= 50; row++ ) {
    for ( let col = 1; col <= 19; col++ ) {
      applyBorder( workSheet2.getCell( row, col ) );
      const cell = workSheet2.getCell( row, col );
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      cell.font = { size: 9 };
    }
  }

  workSheet2.mergeCells( 'A47:K47' );
  workSheet2.getCell( 'A47' ).font = { bold: true };
  workSheet2.getCell( 'A47' ).value = 'CONOCIMIENTOS TEÓRICOS';


  workSheet2.mergeCells( 'A48:K50' );
  workSheet2.getCell( 'A48' ).value = 'Análisis y diseño de sistemas';

  workSheet2.mergeCells( 'L47:P47' );
  workSheet2.getCell( 'L47' ).font = { bold: true };
  workSheet2.getCell( 'L47' ).value = 'PROCEDIMENTALES';

  workSheet2.mergeCells( 'L48:P50' );
  workSheet2.getCell( 'L48' ).value = 'Levanta requerimientos y diseña diagrmas en UML';

  workSheet2.mergeCells( 'Q47:S47' );
  workSheet2.getCell( 'Q47' ).font = { bold: true };
  workSheet2.getCell( 'Q47' ).value = 'ACTITUDINALES';

  workSheet2.mergeCells( 'Q48:S50' );
  workSheet2.getCell( 'Q48' ).value = 'Proactividad, creatividad, analítico';


  workSheet2.mergeCells( 'B52:F52' );
  workSheet2.getCell( 'B52' ).value = 'Tutor Académico del ISTY';

  workSheet2.mergeCells( 'B53:F53' );
  workSheet2.getCell( 'B53' ).value = `Nombre: ${ businessTutor }`;

  workSheet2.mergeCells( 'B54:F56' );
  workSheet2.getCell( 'B54' ).value = 'Firma:' + '_'.repeat( 35 );


  workSheet2.mergeCells( 'K52:O52' );
  workSheet2.getCell( 'K52' ).value = 'Tutor Empresarial de la Empresa Formadora';

  workSheet2.mergeCells( 'K53:O53' );
  workSheet2.getCell( 'K53' ).value = `Nombre: ${ academicTutor }`;

  workSheet2.mergeCells( 'K54:O56' );
  workSheet2.getCell( 'K54' ).value = 'Firma:' + '_'.repeat( 35 );





  workBook.xlsx.writeBuffer()
    .then( ( buffer ) => {
      const blob = new Blob( [ buffer ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } );
      fileSaver.saveAs( blob, 'InformeApredizaje.xlsx' );
    } )
    .catch( ( error ) => {
      console.error( 'Error al guardar el archivo:', error );
    } );
}
