import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEventoComponent } from './detalle-evento.component';

describe('DetalleEventoComponent', () => {
  let component: DetalleEventoComponent;
  let fixture: ComponentFixture<DetalleEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
