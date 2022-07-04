import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaEventoFamComponent } from './busqueda-evento-fam.component';

describe('BusquedaEventoFamComponent', () => {
  let component: BusquedaEventoFamComponent;
  let fixture: ComponentFixture<BusquedaEventoFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaEventoFamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaEventoFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
