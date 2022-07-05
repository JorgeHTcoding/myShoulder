import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPacientesComponent } from './administracion-pacientes.component';

describe('AdministracionPacientesComponent', () => {
  let component: AdministracionPacientesComponent;
  let fixture: ComponentFixture<AdministracionPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
