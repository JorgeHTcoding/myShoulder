import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConCreEvenComponent } from './modal-con-cre-even.component';

describe('ModalConCreEvenComponent', () => {
  let component: ModalConCreEvenComponent;
  let fixture: ComponentFixture<ModalConCreEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConCreEvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConCreEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
