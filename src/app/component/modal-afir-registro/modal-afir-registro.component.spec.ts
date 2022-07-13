import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAfirRegistroComponent } from './modal-afir-registro.component';

describe('ModalAfirRegistroComponent', () => {
  let component: ModalAfirRegistroComponent;
  let fixture: ComponentFixture<ModalAfirRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAfirRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAfirRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
