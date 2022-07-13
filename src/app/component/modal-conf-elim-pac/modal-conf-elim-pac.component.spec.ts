import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfElimPacComponent } from './modal-conf-elim-pac.component';

describe('ModalConfElimPacComponent', () => {
  let component: ModalConfElimPacComponent;
  let fixture: ComponentFixture<ModalConfElimPacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfElimPacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfElimPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
