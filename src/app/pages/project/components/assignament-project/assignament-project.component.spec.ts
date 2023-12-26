import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignamentProjectComponent } from './assignament-project.component';



describe('AssignamentProjectComponent', () => {
  let component: AssignamentProjectComponent;
  let fixture: ComponentFixture<AssignamentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignamentProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignamentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
