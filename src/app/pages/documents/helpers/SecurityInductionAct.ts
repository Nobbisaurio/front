import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getBase64ImageFromURL } from './Base64Image';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DocumentProps } from '../models/documents-Props';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

const studentName = 'MICHAEL SEBASTIAN MICHAEL SEBASTIAN';
const studentCredential = '1754253142';
const studentCareerLevel = '5to';
const instituteName =
  'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC';
const studentCareerName = 'TÉCNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE';
const studentEnterpriseName = 'HSB SOFTECUADOR';

export function createDocument2(
  { logoImage, bgImage, instituteName, code, docName, process, updateDate, elaborationDate, version, academicPeriod, career, dni, firstName, secondName, lastName, secondLastName, company }: DocumentProps
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
              //   image: await logoImage,
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
                text: 'VERSIÓN ',
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
        text: 'ACTA DE RECEPCIÓN DE ORIENTACIONES DE SEGURIDAD, DE RECEPCIÓN DE MEDIOS DE PROTECCIÓN PERSONAL Y DE ACEPTACIÓN DE RIESGOS',
        bold: true,
        margin: [0, 10],
        alignment: 'center',
      },
      {
        text: `Quito D.M. ${formattedDay}/${formattedMonth}/${year}`,
        margin: [0, 10],
        alignment: 'right',
        fontSize: 10,
      },

      {
        text: [
          'Yo ',
          { text: `${[firstName, secondName, lastName, secondLastName].join(' ')} ` },
          'con cédula No. ',
          { text: `${dni} ` },
          'estudiante de ',
          { text: `${academicPeriod} ` },
          'nivel del ',
          { text: `${instituteName}, ` },
          'de la carrera de ',
          { text: `${career}, ` },
          'asignado a la empresa formadora ',
          { text: `${company}; ` },
          'declaro que:',
        ],
        fontSize: 10,
        alignment: 'justify',
        lineHeight: 1.5,
        margin: [5, 0, 5, 4],
      },
      {
        fontSize: 10,
        alignment: 'justify',
        lineHeight: 1.5,
        margin: [5, 0, 5, 4],
        ul: [
          {
            text: 'Reconozco que toda actividad puede tener riesgos y peligros, por tal razón, he recibido una inducción sobre los potenciales riesgos de la actividad que voy a realiza en la empresa formadora-receptora, sobre la identificación de situaciones potencialmente peligrosas, así como las orientaciones sobre las medidas de prevención y normas de seguridad para prevenir accidentes.',
          },
          {
            text: 'He entendido la orientación sobre los riesgos potenciales de esa actividad y sobre sus normas de seguridad para evitarlos o prevenirlos. Por esto, de manera libre y voluntaria, acepto los mismos y me comprometo a cumplir las exigencias de seguridad, protocolos y uso correcto de equipamientos que logren mitigarlos o evitarlos, durante toda mi permanencia en la empresa formadora-receptora.',
          },
          {
            text: 'Tengo conocimiento sobre la actividad que voy a realizar y he recibido medios de protección a ser usados por mí en las actividades designadas en la empresa formadora-receptora.',
          },
          {
            text: 'En caso que tenga una discapacidad física o mental, temporal o permanente, que pueda influir en mi seguridad personal o de un tercero, reportaré de inmediato a mis superiores o encargados, tanto de la empresa formadora-receptora, como del Instituto.',
          },
          {
            text: 'En caso que identifique una situación que considere como potencialmente peligrosa o un incidente de seguridad, reportaré de inmediato a mis superiores o encargados, tanto de la empresa formadora-receptora, como del Instituto.',
          },
          {
            text: 'No realizaré actividades que no estén detalladas en mis actividades, o que no cuenten con el respectivo análisis de riesgos, medidas de seguridad y procedimientos de emergencia establecidos.',
          },
          {
            text: 'Reportaré de inmediato a mis superiores o encargados, tanto de la empresa formadora-receptora, como del Instituto. sobre la pérdida o daño en el equipamiento de protección personal que haya recibido.',
          },
        ],
      },
      {
        text: 'Para constancia de lo indicado antes, firmo:',
        fontSize: 10,
        marginTop: 10,
      },
      {
        text: `${'_'.repeat(40)}\n(Firma del estudiante)`,
        marginTop: 40,
        fontSize: 10,
      },
    ],
  };

  // pdfMake.createPdf(documentDefinition).open();
};
