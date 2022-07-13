import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConElimEvenComponent } from './modal-con-elim-even.component';

describe('ModalConElimEvenComponent', () => {
  let component: ModalConElimEvenComponent;
  let fixture: ComponentFixture<ModalConElimEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConElimEvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConElimEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
