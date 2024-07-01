import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getBase64ImageFromURL, backgroundImage } from './Base64Image';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DocumentProps } from '../models/documents-Props';
( pdfMake as any ).vfs = pdfFonts.pdfMake.vfs;

// const studentName = 'MICHAEL SEBASTIAN MICHAEL SEBASTIAN';
// const studentCredential = '1754253142';
// const studentCareerLevel = '5to';
// const studentCareerName = 'TÉCNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE';
// const studentCareerModality = 'dual';
// const instituteName =
//   'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC';
// const studentEnterpriseName = 'HSB SOFTECUADOR';

export function createDocument1( { logoImage, bgImage, instituteName, academicPeriod, career, dni, firstName, secondName, lastName, secondLastName, company, }: DocumentProps ) {

    const documentDefinition: TDocumentDefinitions = {
        pageSize: 'A4',
        pageMargins: [ 41, 41, 41, 41 ],
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
                    widths: [ 'auto', 300, '*', '*' ],
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
                                margin: [ 0, 2 ],
                                fontSize: 8,
                                bold: true,
                            },
                            {
                                text: 'VERSIÓN ',
                                alignment: 'center',
                                margin: [ 0, 5 ],
                                fontSize: 8,
                            },
                            {
                                text: '1.0',
                                alignment: 'center',
                                margin: [ 0, 5 ],
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
                                margin: [ 0, 5 ],
                            },
                            {
                                text: 'ELABORACIÓN',
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                            {
                                text: '06-06-2023',
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                        ],
                        [
                            {},
                            {
                                text: 'PROCESO 02 PROCESO DE FORMACIÓN PRÁCTICA EN EL ENTORNO LABORAL REAL - FORMACIÓN DUAL',
                                bold: true,
                                fontSize: 8,
                                alignment: 'center',
                            },
                            {
                                text: 'ACTUALIZACIÓN',
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                            {
                                text: '06-06-2023',
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                        ],
                        [
                            {},
                            {
                                text: 'FORMATO 01 CARTA DE PRESENTACIÓN Y ACTA COMPROMISO ESTUDIANTES',
                                bold: true,
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                            {
                                text: 'CÓDIGO',
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                            {
                                text: 'DS-010201',
                                fontSize: 8,
                                alignment: 'center',
                                margin: [ 0, 5 ],
                            },
                        ],
                    ],
                },
            },

            {
                text: 'D.M. Quito  martes, enero 02, 2024',
                margin: [ 0, 10 ],
                alignment: 'left',
                bold: false,
                fontSize: 9,
            },

            {
                text: [
                    'Yo ',
                    { text: `${ [ firstName, secondName, lastName, secondLastName ].join( ' ' ) } `, bold: true },
                    'con C.C. ',
                    { text: `${ dni } `, bold: true },
                    'estudiante de ',
                    { text: `${ academicPeriod } `, bold: true },
                    'de la carrera de ',
                    { text: `${ career } `, bold: true },
                    { text: `en modalidad dual `, bold: true },
                    'del ',
                    { text: `${ instituteName }, `, bold: true },
                    'asignado/a a su Entidad Receptora Formadora ',
                    { text: `${ company }.`, bold: true },
                ],
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: `De acuerdo con el proyecto de carrera aprobado y vigente, en cumplimiento del currículo de la carrera, y en el marco del convenio firmado, me presento y, expreso mi interés y predisposición de realizar prácticas de formación dual, con el fin de cumplir con la planificación, ejecución, control y evaluación del proceso de desarrollo de las competencias laborales como estudiante de la carrera.\n`,

                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: 'Soy una persona que cumple con el perfil de ingreso de la carrera, y busco aprender y desarrollar los conocimientos, habilidades-destrezas y actitudes del perfil de egreso, y lograr las competencias como profesional de mi carrera.\n',
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                margin: [ 0, 0, 0, 4 ],
            },

            {
                text: 'Por lo cual, solicito su aceptación para realizar mi proceso de formación práctica en el entorno laboral real en modalidad dual.',
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: [
                    `A la vez que, me comprometo con acatar la normativa general vigente con las obligaciones establecidas en el Artículo 16 (Obligaciones generales del estudiante en modalidad dual) del Reglamento para Carreras y Programas en Modalidad de Formación Dual vigente, así como también, la normativa interna de la entidad formadora y, la normativa del Instituto.\n`,
                ],
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: [
                    {
                        text: 'Reconociendo y aceptando entre otras prohibiciones expresas durante la Fase Práctica, las que se determinan a continuación:',
                        bold: true,
                    },
                ],
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                ul: [
                    {
                        text: 'Prohibición de consumo de alcohol.',
                    },
                    {
                        text: 'Prohibición de consumo de sustancias estupefacientes, psicotrópicos y estimulantes.',
                    },
                    {
                        text: 'Prohibición de tratos groseros e irrespetuosos a compañeros y del entorno (compañeros y demás personas involucradas).',
                    },
                    {
                        text: 'Prohibición de desacatar las directrices de tutores empresariales y también de tutores académicos del instituto.',
                    },
                ],
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                bold: true,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: 'También me comprometo en:',
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                bold: true,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                ul: [
                    {
                        text: 'Garantizar la confidencialidad, reserva y protección de los datos e información proporcionados por la entidad receptora formadora, durante y después de mi fase práctica.',

                    },
                    {
                        text: 'Y, promover un entorno social armónico, precautelar y salvaguardar la propiedad ajena y los bienes que pertenecen al sitio.',

                    },
                ],
                margin: [ 0, 0, 0, 4 ],
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                bold: true,
            },
            {
                text: 'Y así mismo, me comprometo en elaborar y presentar todos los documentos necesarios para validar el proceso de formación en modalidad dual, de acuerdo con lo establecido por la entidad receptora formadora y/o el Instituto, los cuáles deberán estar correctamente llenados y firmados.',
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                bold: true,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: 'El incumplimiento a lo comprometido con la entidad receptora formadora y/o del Instituto, será causal para la toma de medidas disciplinarias conforme a las responsabilidades del proceso de formación en modalidad dual .',
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                bold: true,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                text: 'De no dar cumplimiento con lo antes citado, puede conllevar bajo el debido proceso a la pérdida de la fase práctica. ',
                fontSize: 9,
                alignment: 'justify',
                lineHeight: 1.5,
                bold: true,
                margin: [ 0, 0, 0, 4 ],
            },
            {
                margin: [ 10, 3, 0, 0 ],
                table: {
                    widths: [ 200, 200 ],
                    heights: [ 10, 15, 15 ],
                    body: [
                        [
                            {
                                text: 'Estudiante',
                                fontSize: 9,
                                alignment: 'center',
                                bold: true,
                            },
                            {
                                text: 'Firma',
                                fontSize: 9,
                                alignment: 'center',
                                bold: true,
                            },
                        ],
                        [
                            {
                                text: `${ [ firstName, secondName, lastName, secondLastName ].join( ' ' ) }`,
                                rowSpan: 2,
                                fontSize: 9,
                                alignment: 'center',
                                bold: true,
                                margin: [ 0, 15, 0, 0 ],
                            },
                            {
                                text: '',
                                rowSpan: 2,
                            },
                        ],
                        [ {}, {} ],
                    ],
                },
            },
        ],
    };

    // pdfMake.createPdf(documentDefinition).open();
};



