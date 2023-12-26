import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorReportComponent } from './tutor-report.component';

describe('TutorReportComponent', () => {
  let component: TutorReportComponent;
  let fixture: ComponentFixture<TutorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
