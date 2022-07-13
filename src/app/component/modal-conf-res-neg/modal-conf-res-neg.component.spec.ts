import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfResNegComponent } from './modal-conf-res-neg.component';

describe('ModalConfResNegComponent', () => {
  let component: ModalConfResNegComponent;
  let fixture: ComponentFixture<ModalConfResNegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfResNegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfResNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
