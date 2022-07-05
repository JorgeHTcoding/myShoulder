import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEventosAdministrarComponent } from './tarjeta-eventos-administrar.component';

describe('TarjetaEventosAdministrarComponent', () => {
  let component: TarjetaEventosAdministrarComponent;
  let fixture: ComponentFixture<TarjetaEventosAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaEventosAdministrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaEventosAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
