import * as docx from 'docx';
import * as fs from 'file-saver';
import * as exceljs from 'exceljs';
import { UserStudent } from '@app/pages/students/models/user-student';
import { CreateDocument } from './create-document';

export interface DocumentProps extends UserStudent, Partial<Omit<CreateDocument, 'id'>> {
  bgImage: () => Promise<string>,
  logoImage: () => Promise<string>,
  instituteName: string,
  docx: typeof docx,
  fileSaver: typeof fs,
  exceljs: typeof exceljs;
}
