import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEventoComponent } from './gestionar-evento.component';

describe('GestionarEventoComponent', () => {
  let component: GestionarEventoComponent;
  let fixture: ComponentFixture<GestionarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
