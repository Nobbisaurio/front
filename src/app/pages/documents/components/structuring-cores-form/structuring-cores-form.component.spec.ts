import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuringCoresFormComponent } from './structuring-cores-form.component';

describe('StructuringCoresFormComponent', () => {
  let component: StructuringCoresFormComponent;
  let fixture: ComponentFixture<StructuringCoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuringCoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuringCoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
