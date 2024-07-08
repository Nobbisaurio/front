import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareerService } from '@app/pages/career/service/career.service';
import { DocumentsService } from '../../service/service.service';
import { PaginationModel } from '@app/core/models/pagination-model';
import { ListCareer } from '@app/pages/career/models/list-career';
import { CreateStructuringCore } from '../../models/create-structuring-core';

@Component({
  selector: 'app-structuring-cores-form',
  templateUrl: './structuring-cores-form.component.html',
  styleUrls: ['./structuring-cores-form.component.scss'],
})
export class StructuringCoresFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private documentsService: DocumentsService
  ) {}

  visible: boolean = false;
  disableInput: boolean = true;
  formCores: FormGroup;

  careerList: ListCareer[];
  careerLevels = [
    { name: 'PRIMERO' },
    { name: 'SEGUNDO' },
    { name: 'TERCERO' },
    { name: 'CUARTO' },
    { name: 'QUINTO' },
    { name: 'SEXTO' },
  ];
  structuringCores: CreateStructuringCore[];
  structuringCoresByCareer: CreateStructuringCore[];

  clerarForm() {
    this.formCores.patchValue({
      careerCode: '',
      careerLevel: '',
      coreName: '',
    });
  }

  openModal() {
    this.visible = true;
    this.formCores.get('careerLevel').disable();
    this.formCores.get('coreName').disable();
  }

  cancelEdit() {
    this.visible = false;
    this.clerarForm();
  }

  saveStructuringcore() {
    return this.documentsService
      .createOrEditStructuringcode(this.formCores.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.clerarForm();
          this.visible = false;
        },
        error: (err) => console.log(err),
      });
  }

  filterSC() {
    if (this.formCores.value.careerCode) {
      this.formCores.get('careerLevel').enable();
      this.formCores.get('coreName').enable();

      this.structuringCoresByCareer = this.structuringCores.filter((core) => {
        return core.careerCode === this.formCores.value.careerCode;
      });
    }
  }

  setPrevSC() {
    const { careerCode, careerLevel } = this.formCores.value;
    const structuringCore = this.structuringCores.filter((core) => {
      return core.careerCode === careerCode && core.careerLevel === careerLevel;
    })[0];

    this.formCores.patchValue({
      coreName: structuringCore.coreName,
    });
  }

  ngOnInit(): void {
    this.formCores = this.fb.group({
      careerCode: ['', [Validators.required, Validators.minLength(1)]],
      careerLevel: ['', [Validators.required, Validators.minLength(1)]],
      coreName: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.documentsService.getAllCareers().subscribe({
      next: (res) => {
        this.careerList = res.results;
      },
    });

    this.documentsService.getAllstructuringCores().subscribe({
      next: (res) => {
        console.log(res);
        this.structuringCores = res;
      },
    });
  }
}
