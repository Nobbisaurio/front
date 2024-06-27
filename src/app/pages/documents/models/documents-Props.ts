import * as docx from 'docx';
import * as fs from 'file-saver';
import * as exceljs from 'exceljs';

export interface DocumentProps {
  bgImage: () => Promise<string>,
  logoImage: () => Promise<string>,
  studentName:string,
  studentCredential:string,
  studentCareerLevel:string,
  studentCareerName:string,
  instituteName:string,
  studentEnterpriseName:string,
  docx: typeof docx,
  fileSaver: typeof fs,
  exceljs: typeof exceljs
}
