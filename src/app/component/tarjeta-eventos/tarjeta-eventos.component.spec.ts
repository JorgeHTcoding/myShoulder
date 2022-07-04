import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEventosComponent } from './tarjeta-eventos.component';

describe('TarjetaEventosComponent', () => {
  let component: TarjetaEventosComponent;
  let fixture: ComponentFixture<TarjetaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
