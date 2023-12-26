import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAgreementComponent } from './profile-agreement.component';

describe('ProfileAgreementComponent', () => {
  let component: ProfileAgreementComponent;
  let fixture: ComponentFixture<ProfileAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
