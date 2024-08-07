import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getBase64ImageFromURL, } from './Base64Image';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DocumentProps } from '../models/documents-Props';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export function createDocument3({ logoImage, bgImage, code, docName, updateDate, process, elaborationDate, version, electivePeriod, career, company,studentProjectTable,academicTutor,businessTutor,bussinesTutorDni, academicTutorDni, careerCoordinator,careerCoordinatorDni }: DocumentProps
) {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();


  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;



  const documentDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [41, 41, 41, 41],
    content: [
      // {
      //   image: await bgImage,
      //   width: 595,
      //   height: 842,
      //   absolutePosition: { y: 0, x: 0 },
      // },
      {
        marginTop: 70,
        table: {
          widths: ['auto', 300, '*', '*'],
          body: [
            [
              // {
              //   image:await logoImage,
              //   fit: [65, 65],
              //   rowSpan: 4,
              //   alignment: 'center',
              //   margin: [0, 20],
              // },
              {
                text: 'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC',
                alignment: 'center',
                margin: [0, 2],
                fontSize: 8,
                bold: true,
              },
              {
                text: 'VERSIÓN',
                alignment: 'center',
                margin: [0, 5],
                fontSize: 8,
              },
              {
                text: version,
                alignment: 'center',
                margin: [0, 5],
                fontSize: 8,
              },
            ],
            [
              {},
              {
                text: 'MACROPROCESO 01 DOCENCIA',
                bold: true,
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: 'ELABORACIÓN',
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: elaborationDate,
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
            ],
            [
              {},
              {
                text: process,
                bold: true,
                fontSize: 8,
                alignment: 'center',
              },
              {
                text: 'ACTUALIZACIÓN',
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: updateDate,
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
            ],
            [
              {},
              {
                text: docName,
                bold: true,
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: 'CÓDIGO',
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: code,
                fontSize: 8,
                alignment: 'center',
                margin: [0, 5],
              },
            ],
          ],
        },
      },
      {
        text: 'ACTA DE FORMACIÓN PRÁCTICA EN EL ENTORNO LABORAL REAL',
        alignment: 'center',
        margin: [0, 10],
        bold: true,
      },
      {
        margin: [50, 0],
        table: {
          heights: [20, 20],
          body: [
            [
              {
                text: 'Fecha:',
                bold: true,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: `${formattedDay}/${formattedMonth}/${year}`,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: 'Carrera:',
                bold: true,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: career,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
            ],
            [
              {
                text: 'Periodo academico:',
                bold: true,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: electivePeriod,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: 'Entidad receptora formadora:',
                bold: true,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
              {
                text: company,
                fontSize: 10,
                alignment: 'center',
                margin: [0, 5],
              },
            ],
          ],
        },
      },
      {
        text: 'La planificación de la formación práctica en el entorno laboral real tiene como objetivo: desarrollar en los estudiantes nuevas habilidades de pensamiento, destrezas sensoriales y motoras, hábitos y actitudes requeridos para el trabajo profesional y consolidar las capacidades prácticas adquiridas en el entorno académico en integración con los factores tecnológicos y socio laborales propios del entorno laboral real, cuyos escenarios concretos son las entidades formadoras seleccionadas de forma pertinente, con las que el instituto mantiene compromisos mutuos.',
        fontSize: 10,
        alignment: 'justify',
        marginTop: 15,
        lineHeight: 1.2,
      },
      {
        text: `La presente acta valida el desarrollo del aprendizaje en el entorno laboral real de los estudiantes de la carrera de ${career} con Nivel Equivalente a Tecnología Superior del Instituto Superior Tecnológico de Turismo y Patrimonio Yavirac, los mismos que han ejecutado sus prácticas preprofesionales acorde a lo estipulado en el Reglamento de Régimen Académico, en el Reglamento para las Carreras y Programas en Modalidad de Formación Dual y con el convenio de prácticas preprofesionales suscrito y vigente entre el instituto y la respectiva entidad receptora formadora. `,
        fontSize: 10,
        alignment: 'justify',
        marginTop: 7,
        lineHeight: 1.2,
      },
      {
        text: 'Además, al acta se anexan siete documentos que permiten garantizar la formación práctica en el entorno laboral real de los estudiantes, a través del seguimiento, control y evaluación de las actividades desarrolladas. Estos documentos son:  ',
        fontSize: 10,
        alignment: 'justify',
        marginTop: 7,
        lineHeight: 1.2,
      },
      {
        ol: [
          {
            text: 'Listado de Estudiantes',
            marginTop: 3,
          },
          {
            text: 'Plan marco de formación ',
            marginTop: 3,
          },
          {
            text: 'Plan de rotación del estudiante ',
            marginTop: 3,
          },
          {
            text: 'Registro de asistencia',
            marginTop: 3,
          },
          {
            text: 'Informe de aprendizaje de fase práctica (Bitácora) ',
            marginTop: 3,
          },
          {
            text: 'Ficha de Evaluación por parte del instituto ',
            marginTop: 3,
          },
          {
            text: 'Ficha de evaluación por parte de la empresa',
            marginTop: 3,
          },
        ],
        marginLeft: 20,
        fontSize: 10
      },
      {
        text: 'Los estudiantes han demostrado, durante el desarrollo de la fase práctica, responsabilidad académica, aplicando conocimientos técnicos y experiencia comprobada en cada actividad acorde a la planificación del aprendizaje laboral real. Por tanto, suscriben, el presente documento, el tutor académico, el tutor de la entidad receptora formadora y el coordinador / vicecoordinador de carrera respectivo, y el estudiante aceptando su nota.',
        fontSize: 10,
        alignment: 'justify',
        marginTop: 7,
        lineHeight: 1.2,
      },
      // {
        // pageBreak:'before',
      //   image: await bgImage,
      //   width: 595,
      //   height: 842,
      //   absolutePosition: { y: 0, x: 0 },
      // },
      {
        text: 'Listado de Estudiantes',
        fontSize:12,
        alignment:'center',
        marginTop:80,
        bold:true
      },
      {
        marginTop:20,
        marginLeft:10,
        table:{
          widths:[10,'*','*','*',40,100],
          body:[
            [
              {
                text:'N°',
                alignment:'center',
                fontSize:9,
                bold:true
              },
              {
                text:'NOMBRE Y APELLIDO',
                alignment:'center',
                fontSize:9,
                bold:true
              },
              {
                text:'CÉDULA DE IDENTIDAD',
                alignment:'center',
                fontSize:9,
                bold:true
              },
              {
                text:'NIVEL',
                alignment:'center',
                fontSize:9,
                bold:true
              },
              {
                text:'NOTA',
                alignment:'center',
                fontSize:9,
                bold:true
              },
              {
                text:'FIRMA',
                alignment:'center',
                fontSize:9,
                bold:true
              },

            ],
            ...studentProjectTable
          ]
        }
      },
      {
        marginTop:30,
        marginLeft:20,
        table:{
          widths:[150,150,150],
          heights:['auto',40, 'auto','auto'],
          body:[
            [

              {
                text:'FIRMA DEL TUTOR DE LA ENTIDAD RECEPTORA -FORMADORA',
                fontSize: 9,
                bold:true,
                alignment:'center'
              },
              {
                text:'FIRMA DEL COORDINADOR DE CARRERA',
                fontSize: 9,
                bold:true,
                alignment:'center'
              },
              {
                text:'FIRMA DEL TUTOR ACADÉMICO',
                fontSize: 9,
                bold:true,
                alignment:'center'
              },

            ],
            [

              {},
              {},
              {},
            ],
            [
              {
                text:`Nombre: ${businessTutor}`,
                fontSize: 9,
                bold:true,
                alignment:'center'

              },
              {
                text:`Nombre: ${careerCoordinator}`,
                fontSize: 9,
                bold:true,
                alignment:'center'
              },
              {
                text:`Nombre: ${academicTutor}`,
                fontSize: 9,
                bold:true,
                alignment:'center'
              },

            ],
            [
              {
                text: `CI. ${bussinesTutorDni}`,
                fontSize: 9,
                bold:true,
                alignment:'center'
              },
              {
                text: `CI. ${careerCoordinatorDni}`,
                fontSize: 9,
                bold:true,
                alignment:'center'
              },
              {
                text: `CI. ${academicTutorDni}`,
                fontSize: 9,
                bold:true,
                alignment:'center'
              },
            ],
          ]
        }
      }
    ],

  };

  // pdfMake.createPdf(documentDefinition).open();
};

