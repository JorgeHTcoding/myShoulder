import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEventoComponent } from './gestion-evento.component';

describe('GestionEventoComponent', () => {
  let component: GestionEventoComponent;
  let fixture: ComponentFixture<GestionEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
