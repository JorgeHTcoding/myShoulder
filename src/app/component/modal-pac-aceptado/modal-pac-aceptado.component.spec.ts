import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPacAceptadoComponent } from './modal-pac-aceptado.component';

describe('ModalPacAceptadoComponent', () => {
  let component: ModalPacAceptadoComponent;
  let fixture: ComponentFixture<ModalPacAceptadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPacAceptadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPacAceptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
