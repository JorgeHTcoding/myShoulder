import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfAsisEvenComponent } from './modal-conf-asis-even.component';

describe('ModalConfAsisEvenComponent', () => {
  let component: ModalConfAsisEvenComponent;
  let fixture: ComponentFixture<ModalConfAsisEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfAsisEvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfAsisEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
