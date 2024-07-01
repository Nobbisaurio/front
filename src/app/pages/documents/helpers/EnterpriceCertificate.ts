import { DocumentProps } from '../models/documents-Props';



export function createDocument5( { docx, fileSaver, dni, instituteName, firstName, secondName, lastName, secondLastName, career, academicPeriod, company, parallel, electivePeriod, businessTutor }: DocumentProps ) {
    const doc = new docx.Document( {
        sections: [ {
            properties: {
                page: {
                    margin: {
                        top: 1400,
                        right: 1400,
                        bottom: 1400,
                        left: 1400
                    }
                }
            },
            children: [
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'Logo de la Emrpesa', size: 24, highlight: 'yellow' } )
                    ], spacing: { line: 1.5 * 240, after: 600 }, alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: `Quito, 00 de ${ new Date().toLocaleString( 'default', { month: 'long' } ) } de ${ new Date().getFullYear() }`, size: 24, highlight: 'yellow' } )
                    ], spacing: { line: 1.5 * 240, after: 300 }, alignment: 'right'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'CERTIFICADO DE PRÁCTICAS EMPRESARIALES', size: 24, bold: true } )
                    ], spacing: { line: 1.5 * 240, after: 300 }, alignment: 'center'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'Este certificado es otorgado a:', size: 24, bold: true } )
                    ], spacing: { line: 1.5 * 240, after: 300 }, alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: [ firstName, secondName, lastName, secondLastName ].join( ' ' ), size: 24, bold: true } )
                    ], alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: dni, size: 24 } )
                    ], alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'Nivel: ', size: 24, bold: true } ),
                        new docx.TextRun( { text: `${ academicPeriod } `, size: 24 } ),
                        new docx.TextRun( { text: 'Paralelo: ', size: 24, bold: true } ),
                        new docx.TextRun( { text: `${ parallel.charAt( 0 ) } `, size: 24, } ),
                        new docx.TextRun( { text: 'Jornada: ', size: 24, bold: true } ),
                        new docx.TextRun( { text: `${ '"Jornada"' } `, size: 24, highlight: 'yellow' } ),
                    ], alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: instituteName, size: 24 } )
                    ], alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: `Tecnología en ${ career }`, size: 24 } )
                    ], alignment: 'left', spacing: { line: 1.5 * 240, after: 300 }
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'Por la presente, la empresa ', size: 24 } ),
                        new docx.TextRun( { text: `${ company } `, size: 24, bold: true } ),
                        new docx.TextRun( { text: `se complace en certificar que el estudiante antes mencionado completó exitosamente sus prácticas profesionales en nuestras instalaciones durante el período comprendido entre `, size: 24 } ),
                        new docx.TextRun( { text: `02/01/2024 y 23/02/2024, `, size: 24, highlight: 'yellow' } ),
                        new docx.TextRun( { text: `totalizando un tiempo de 280 horas, más 10 horas autónomas. Estas fechas son correspondientes al periodo lectivo `, size: 24 } ),
                        new docx.TextRun( { text: `${ electivePeriod }`, size: 24 } ),
                    ], alignment: 'left', spacing: { line: 1.5 * 240, after: 300 }
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'Durante su estadía con nosotros, el estudiante demostró un alto nivel de compromiso, entusiasmo y dedicación hacia sus responsabilidades asignadas. Participó activamente en diversas actividades relacionadas con ', size: 24 } ),
                        new docx.TextRun( { text: `${ career }, `, size: 24, bold: true } ),
                        new docx.TextRun( { text: 'lo que contribuyó significativamente a su propio crecimiento y al logro de nuestros objetivos corporativos.', size: 24 } ),
                    ], alignment: 'left', spacing: { line: 1.5 * 240, after: 300 }
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: 'Atentamente:', size: 24 } ),
                    ], alignment: 'left', spacing: { line: 1.5 * 240, after: 300 }
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: '_'.repeat( 15 ), size: 24 } ),
                    ], alignment: 'left', spacing: { line: 1.5 * 240, after: 300 }
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: `${ businessTutor }`, size: 24 } ),
                    ], alignment: 'left'
                } ),
                new docx.Paragraph( {
                    children: [
                        new docx.TextRun( { text: company, size: 24 } ),
                    ], alignment: 'left'
                } ),
            ]
        } ]
    } );
    // const blob = await docx.Packer.toBlob( doc );
    // fileSaver.saveAs( blob, 'document genereted' )

}
