import { DocumentProps } from '../models/documents-Props';


export function createDocument4({ docx, fileSaver, logoImage, instituteName, career, elaborationDate, updateDate, code, version, docName, process, company, project, academicTutor, businessTutor }: DocumentProps) {
  const doc = new docx.Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 700,
              right: 700,
              bottom: 700,
              left: 700,
            },
          },
        },
        headers: {
          default: new docx.Header({
            children: [
              new docx.Table({
                rows: [
                  new docx.TableRow({
                    children: [
                      new docx.TableCell({
                        verticalAlign: 'center',
                        rowSpan: 4,
                        width: { size: 10 },
                        children: [
                          new docx.Paragraph({
                            children: [
                              //   new docx.ImageRun( {
                              // data: await logoImage,
                              // transformation: {
                              //   width: 100,
                              //   height: 80,
                              // },
                              //   } ),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                      new docx.TableCell({
                        verticalAlign: 'center',
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({
                                text: instituteName,
                                bold: true,
                              }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                        shading: {
                          fill: '3366ff',
                        },
                      }),
                      new docx.TableCell({
                        verticalAlign: 'center',
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({
                                children: [
                                  new docx.TextRun({
                                    text: 'VERSION: ',
                                    bold: true,
                                  }),
                                  new docx.TextRun({ text: '\n', break: 1 }),
                                  new docx.TextRun({
                                    text: version,
                                    bold: true,
                                  }),
                                ],
                              }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                    ],
                  }),
                  new docx.TableRow({
                    children: [
                      new docx.TableCell({
                        verticalAlign: 'center',
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({
                                text: `MACROPROCESO 01 DOCENCIA`,
                                bold: true,
                              }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                      new docx.TableCell({
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({
                                text: 'ELABORACIÓN: ',
                                bold: true,
                              }),
                              new docx.TextRun({ text: '\n', break: 1 }),
                              new docx.TextRun({
                                text: elaborationDate,
                                bold: true,
                              }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                    ],
                  }),
                  new docx.TableRow({
                    children: [
                      new docx.TableCell({
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({ text: process, bold: true }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                        shading: {
                          fill: 'e6802c',
                        },
                      }),
                      new docx.TableCell({
                        verticalAlign: 'center',
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({
                                text: 'ACTUALIZACIÓN: ',
                                bold: true,
                              }),
                              new docx.TextRun({ text: '\n', break: 1 }),
                              new docx.TextRun({
                                text: updateDate,
                                bold: true,
                              }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                    ],
                  }),
                  new docx.TableRow({
                    children: [
                      new docx.TableCell({
                        verticalAlign: 'center',
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({ text: docName, bold: true }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                      new docx.TableCell({
                        verticalAlign: 'center',
                        children: [
                          new docx.Paragraph({
                            children: [
                              new docx.TextRun({
                                text: 'Código: ',
                                bold: true,
                              }),
                              new docx.TextRun({ text: '\n', break: 1 }),
                              new docx.TextRun({ text: code, bold: true }),
                            ],
                            alignment: 'center',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `CARRERA DE TECNÓLOGO SUPERIOR EN ${career}`,
                bold: true,
                break: 2,
                size: 28,
              }),
              new docx.TextRun({
                text: `${company}`,
                bold: true,
                break: 4,
                size: 24,
              }),
              new docx.TextRun({
                text: 'Logo de la Empresa',
                bold: true,
                break: 4,
                size: 24,
                highlight: 'yellow',
              }),
              new docx.TextRun({
                text: 'Proyecto Empresarial',
                bold: true,
                break: 3,
                size: 24,
              }),
              new docx.TextRun({
                text: 'MEMORIA DE EJERCITACIÓN PRÁCTICA CON APORTE EMPRESARIAL',
                bold: true,
                break: 3,
                size: 24,
              }),
              new docx.TextRun({
                text: 'TÍTULO DEL PROYECTO:',
                bold: true,
                break: 3,
                size: 24,
              }),
              new docx.TextRun({
                text: project,
                bold: true,
                break: 3,
                size: 24,
              }),
            ],
            alignment: 'center',
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `GRUPO DE PROYECTO: `,
                bold: true,
                break: 1,
                size: 24,
              }),
            ],
            alignment: 'left',
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'NOMBRES Y APELLIDOS',
                bold: true,
                break: 1,
                size: 24,
                highlight: 'yellow',
              }),
              new docx.TextRun({
                text: 'NOMBRES Y APELLIDOS',
                bold: true,
                break: 2,
                size: 24,
              }),
            ],
            alignment: 'center',
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `TUTOR ACADÉMICO: ${academicTutor}`,
                bold: true,
                break: 3,
                size: 24,
              }),
              new docx.TextRun({
                text: `TUTOR EMPRESARIAL: ${businessTutor}`,
                bold: true,
                break: 2,
                size: 24,
              }),
            ],
            alignment: 'left',
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'ASIGNATURA DE FASE PRÁCTICA:',
                bold: true,
                break: 3,
                size: 24,
              }),
              new docx.TextRun({
                text: 'NIVEL(ES):',
                bold: true,
                break: 2,
                size: 24,
              }),
            ],
            alignment: 'left',
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `QUITO, ${new Date()
                  .toLocaleString('default', { month: 'long' })
                  .toUpperCase()} ${new Date().getFullYear()}`,
                bold: true,
                break: 3,
                size: 24,
              }),
            ],
            alignment: 'right',
          }),

          new docx.Paragraph({
            children: [
              new docx.TextRun({ text: 'ÍNDICE:', bold: true, size: 24 }),
            ],
            alignment: 'center',
            pageBreakBefore: true,
          }),

          new docx.TableOfContents('ÍNDICE', {
            hyperlink: true,
            headingStyleRange: '1-3',
          }),

          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({
                text: '1. Título del proyecto:',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300, before: 300 },
            pageBreakBefore: true,
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: `Título del proyecto empresarial`,
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'center',
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'El título del proyecto empresarial, se debe desarrollar en función del programa de tutorías de la fase  práctica. Definir cronograma de tutorías con los estudiantes y tutores (Borrar lo resaltado con color amarillo).',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({ text: '2. Objetivos:', bold: true, size: 24 }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '2.1 Objetivo General',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'El objetivo general es una frase que describe que se va a hacer en todo el trabajo. Es una única frase que inicia con un verbo, y normalmente se dice:',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { start: 720 },
          }),

          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Qué se va a hacer (se indica con el verbo), ejemplo: Aplicar, diagnosticar, comparar, etc.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'El para qué del propósito (se explica la finalidad del objetivo), ejemplo: con el fin de, para, etc.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Cómo se logrará el objetivo (se indica con el complemento), ejemplo: mediante, a través de, utilizando, etc.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Adicionalmente algunos trabajos necesitan indicar algunas acotaciones como: lugar, tiempo, etc.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Dónde se va hacer (ciudad, país, región, etc.).',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'En qué tiempo (periodo de tiempo, año, mes, etc.)',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Todos estos anteriores elementos se deben integrar en una frase para redactar el objetivo general. ',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Ejemplo:',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Desarrollar un sistema de notificaciones para la protección de datos del usuario, con la finalidad que no existan irregularidades en los datos del cliente,  a través del lenguaje de programación “Visual Basic, base de datos “Microsoft SQL Server Management Studio” y el framework “Telerik”.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '2.2 Objetivo Especificos',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `Giménez (2008) en el Proceso de Investigación dice “el objetivo general es un enunciado macro, el propósito general del investigador en cuanto a los aspectos que desea integrar y conocer. Para el logro del objetivo general será necesario la formulación de los objetivos específicos” pág. 31
                    En cuanto a los objetivos específicos nos dice “son las metas parciales, es decir, las actividades a realizar en cada una de las etapas de la investigación para lograr el objetivo general” pág. 33`,
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `Con relación a sus características los objetivos deben ser claros, precisos y concisos. Inician con un verbo en infinitivo y la escogencia de esta palabra para su redacción es fundamental acerca de lo que se desea perseguir.`,
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `Por su parte, Naghi (2005) en el texto Metodología de la Investigación dice que para los objetivos se deben tener en cuenta factores como: ¿Qué tipo de información se necesita?, ¿A quién se debe informar de los resultados finales de la investigación?, ¿Quién utilizará los resultados para la toma de decisiones? Además, agrega el autor se debe dar respuesta con plena claridad a las siguientes preguntas: ¿Qué información se busca? y ¿Qué tanta información se necesita? pág. 65`,
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: `Ejemplo de objetivos específicos en función del Objetivo General dado anteriormente:`,
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Confirmar la relación entre las encuentras realizadas y los cambios efectuados como respuesta en los restaurantes que las iniciaron.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Comparar los grados de satisfacción antes y después de los cambios realizados.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Definir la relación real entre encuestas y satisfacción del cliente.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Ejemplo:',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Controlar la protección de datos mediante avisos o notificaciones para la consistencia de la información del cliente.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Objetivo específico 2',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({
                text: '3 Introduccion',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '3.1 Planteamiento del problema',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 1440 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'El problema debe ser planteado en términos claros y precisos, sin comentarios que den referencia de una posible solución. Es decir, identificación del problema central o global del proyecto. El problema debe referenciar la terminología técnico científica que direccione hacia las variables que lo sustentan. Se puede plantear como afirmación o interrogante.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'El problema se plantea de modo tal que destaque una contradicción en la práctica social. En un párrafo se plantean las características de la Empresa hasta el momento, describen los aspectos generalmente beneficiosos o positivos con respecto a la Empresa.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'En el segundo párrafo, que representa la otra parte de la contradicción de la Empresa, se comienza destacando: sin embargo, no obstante, independientemente de lo anteriormente planteado… Se trata de presentar la otra parte de la contradicción, donde ponemos en evidencia las insuficiencias que aún se presentan en la Empresa, sin decir: falta esto y esto otro.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '3.2 Justificacion',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 1440 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'En esta parte, se debe exponer las razones por las cuales es importante el trabajo, cómo este proyecto genera innovación, permite el desarrollo de oportunidades o resuelve problemas de la empresa, considerando las diferentes aportaciones de los miembros del equipo de una concepción personal y social que aporte al buen vivir y que se refleje en el proyecto empresarial. ',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Además, es importante indicar quienes se beneficiarían con la realización de este estudio.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Es imprescindible que para su justificación realicen una investigación exploratoria bibliográfica.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '3.3 Alcance del proyecto',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 1440 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'En este punto, se debe delimitar el tamaño y  profundidad del Proyecto, considerando el nivel de aprendizaje y el tiempo disponible para su realización. El alcance debe tener relación con el objetivo general.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Breve reseña histórica, social o cultural del destino, identificación de los atractivos turísticos en el destino, hacer un inventario de los mismos, establecer características medioambientales, identificar otras áreas productivas aparte del turismo, realizar un análisis FODA.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({
                text: '4. Metodología de desarrollo de software (si aplica)',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: '¿Qué tipo de proyecto desarrollaremos? Para ello debemos seleccionar la metodología adecuada a nuestro tipo de proyecto, es decir, replicar los pasos de un proceso metodológico ya probado acorde con los objetivos específicos de nuestro estudio, puede ser una metodología para cada objetivo o una que abarque a todos ellos.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'La metodología proporciona las herramientas y las técnicas mediante las cuales intentaremos transformar la realidad con el fin de mejorarla, y constituye el eje central de un proyecto. Es conveniente evaluarla en función de los objetivos y de los beneficiarios del proyecto.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),

          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({
                text: '5. Resultados Alcanzados',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Esta es la parte principal, debe iniciarse con un esquema o gráfico que dé la idea integral de la estructura de la propuesta (resultados alcanzados), después desarrollar la misma en el orden planteado. Su extensión debe ser de al menos el 60% de todo el proyecto, hay que hacer una coherente y consistente descripción, en detalle, fundamentando, aportando los criterios que se tuvieron en cuenta, cuáles son los modelos de trabajo que se han obtenido, cómo se aplican, en qué consiste el aporte que permitirá mejorar los resultados del trabajo, teniendo muy en cuenta que se deben validar los resultados alcanzados al concluir este apartado.',
                size: 24,
                highlight: 'yellow',
              }),
            ],

            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'En el caso de que se hayan levantado requerimientos (historias de usuario) ',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Gráficas de diseño ',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Prototipos de pantallas ',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Pruebas funcionales y técnicas ',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            bullet: {
              level: 0,
            },
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Deben aparecer en la parte de Anexos.  ',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),

          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({
                text: '6. Conclusiones y recomendaciones',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '6.1 Conclusiones',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 1440 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Es la valoración general del trabajo presentado, se debe destacar el aporte y las generalizaciones que pueden hacerse de todo el proceso empresarial. Es importante ajustarse en las conclusiones a los resultados obtenidos de cada uno de los objetivos específicos planteados y no hacer referencias a aspectos que necesitan continuarse estudiando.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_2,
            children: [
              new docx.TextRun({
                text: '6.2 Recomendaciones',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 1440 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Deben ser aquellas que no están al alcance del Autor(es) en el momento de la culminación del trabajo, pero que pueden obtenerse en un periodo de posterior en el entorno empresarial, o que pueden ser resueltas en otras instancias por su factibilidad y beneficio para la misma. También deben estar en correspondencia con el desarrollo de la propuesta. Un error muy frecuente es incluir en las conclusiones aspectos que se refieren a recomendaciones. El número de recomendaciones no debe exceder el de las conclusiones.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            indent: { start: 1440 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({
                text: '7. Referencias',
                bold: true,
                size: 24,
              }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'Deberá indicarse en orden alfabético, comenzando por el autor, título, editorial, ciudad y año (aplicar Normas APA).  La bibliografía y fuentes de información tienen que ser actualizadas, de los últimos 10 años preferentemente.',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
          new docx.Paragraph({
            heading: docx.HeadingLevel.HEADING_1,
            children: [
              new docx.TextRun({ text: '8. Anexos', bold: true, size: 24 }),
            ],
            alignment: 'left',
            spacing: { line: 2 * 240, after: 300 },
            indent: { firstLine: 720 },
          }),
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: 'En este punto, deben estar mencionados en el desarrollo del documento los anexos (ejemplo: ver anexo 1, 2, etc.). Se anexarán ilustraciones, tablas y demás elementos que consideren pertinentes él o los autores con el criterio de los tutores guías. Como requisito primordial, se anexará al final, la presentación del proyecto que realizó o realizaron él o los estudiantes para la defensa y el documento final en formato WORD y PDF (proyecto empresarial).',
                size: 24,
                highlight: 'yellow',
              }),
            ],
            indent: { start: 720 },
            spacing: { line: 2 * 240, after: 300 },
          }),
        ],
      },
    ],
  });

  // const blob = await docx.Packer.toBlob( doc );
  // fileSaver.saveAs( blob, 'Esquema Proyecto Empresarial' )
}
