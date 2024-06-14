import * as fs from 'file-saver';

import * as docx from 'docx';

export const docxd = new docx.Document({
  sections: [
    {
      properties: {},
      headers:{
        default: new docx.Header({
          children:[
            
          ]
        })
      },
      children:[]
    },
  ],
});

export const downloadFile = async()=>{
  const blob = await docx.Packer.toBlob(docxd);
  fs.saveAs(blob,'document genereted')
}



