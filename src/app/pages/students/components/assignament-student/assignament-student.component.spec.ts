import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignamentStudentComponent } from './assignament-student.component';

describe('AssignamentStudentComponent', () => {
  let component: AssignamentStudentComponent;
  let fixture: ComponentFixture<AssignamentStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignamentStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignamentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
