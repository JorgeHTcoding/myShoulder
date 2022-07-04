import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProfesionalComponent } from './landing-profesional.component';

describe('LandingProfesionalComponent', () => {
  let component: LandingProfesionalComponent;
  let fixture: ComponentFixture<LandingProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
