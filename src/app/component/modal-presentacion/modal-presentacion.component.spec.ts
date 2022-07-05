import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPresentacionComponent } from './modal-presentacion.component';

describe('ModalPresentacionComponent', () => {
  let component: ModalPresentacionComponent;
  let fixture: ComponentFixture<ModalPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPresentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
