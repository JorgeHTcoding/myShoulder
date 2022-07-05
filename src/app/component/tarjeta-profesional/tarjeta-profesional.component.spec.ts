import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProfesionalComponent } from './tarjeta-profesional.component';

describe('TarjetaProfesionalComponent', () => {
  let component: TarjetaProfesionalComponent;
  let fixture: ComponentFixture<TarjetaProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
