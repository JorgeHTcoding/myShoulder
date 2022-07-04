import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaEventoComponent } from './busqueda-evento.component';

describe('BusquedaEventoComponent', () => {
  let component: BusquedaEventoComponent;
  let fixture: ComponentFixture<BusquedaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
