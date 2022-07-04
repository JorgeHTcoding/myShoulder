import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionPacienteComponent } from './edicion-paciente.component';

describe('EdicionPacienteComponent', () => {
  let component: EdicionPacienteComponent;
  let fixture: ComponentFixture<EdicionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
