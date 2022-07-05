import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPacienteComponent } from './gestion-paciente.component';

describe('GestionPacienteComponent', () => {
  let component: GestionPacienteComponent;
  let fixture: ComponentFixture<GestionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
