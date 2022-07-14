import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAfirApunEvenComponent } from './modal-afir-apun-even.component';

describe('ModalAfirApunEvenComponent', () => {
  let component: ModalAfirApunEvenComponent;
  let fixture: ComponentFixture<ModalAfirApunEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAfirApunEvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAfirApunEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
