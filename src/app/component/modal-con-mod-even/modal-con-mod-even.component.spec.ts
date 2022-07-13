import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConModEvenComponent } from './modal-con-mod-even.component';

describe('ModalConModEvenComponent', () => {
  let component: ModalConModEvenComponent;
  let fixture: ComponentFixture<ModalConModEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConModEvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConModEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
