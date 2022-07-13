import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAfirEdicionComponent } from './modal-afir-edicion.component';

describe('ModalAfirEdicionComponent', () => {
  let component: ModalAfirEdicionComponent;
  let fixture: ComponentFixture<ModalAfirEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAfirEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAfirEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
