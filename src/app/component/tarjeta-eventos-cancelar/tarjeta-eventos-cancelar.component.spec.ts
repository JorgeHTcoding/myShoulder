import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEventosCancelarComponent } from './tarjeta-eventos-cancelar.component';

describe('TarjetaEventosCancelarComponent', () => {
  let component: TarjetaEventosCancelarComponent;
  let fixture: ComponentFixture<TarjetaEventosCancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaEventosCancelarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaEventosCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
