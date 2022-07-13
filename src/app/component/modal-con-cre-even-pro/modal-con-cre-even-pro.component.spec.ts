import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConCreEvenProComponent } from './modal-con-cre-even-pro.component';

describe('ModalConCreEvenProComponent', () => {
  let component: ModalConCreEvenProComponent;
  let fixture: ComponentFixture<ModalConCreEvenProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConCreEvenProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConCreEvenProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
