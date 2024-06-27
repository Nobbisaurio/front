import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsHeaderComponent } from './docs-header.component';

describe('DocsHeaderComponent', () => {
  let component: DocsHeaderComponent;
  let fixture: ComponentFixture<DocsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
