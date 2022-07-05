import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPacientesComponent } from './solicitud-pacientes.component';

describe('SolicitudPacientesComponent', () => {
  let component: SolicitudPacientesComponent;
  let fixture: ComponentFixture<SolicitudPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
