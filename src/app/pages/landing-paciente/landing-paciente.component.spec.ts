import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPacienteComponent } from './landing-paciente.component';

describe('LandingPacienteComponent', () => {
  let component: LandingPacienteComponent;
  let fixture: ComponentFixture<LandingPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
