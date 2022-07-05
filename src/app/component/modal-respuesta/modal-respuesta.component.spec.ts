import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRespuestaComponent } from './modal-respuesta.component';

describe('ModalRespuestaComponent', () => {
  let component: ModalRespuestaComponent;
  let fixture: ComponentFixture<ModalRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRespuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
