import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEventosPacienteComponent } from './mis-eventos-paciente.component';

describe('MisEventosPacienteComponent', () => {
  let component: MisEventosPacienteComponent;
  let fixture: ComponentFixture<MisEventosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisEventosPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisEventosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
