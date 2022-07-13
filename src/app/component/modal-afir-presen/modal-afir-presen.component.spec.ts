import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAfirPresenComponent } from './modal-afir-presen.component';

describe('ModalAfirPresenComponent', () => {
  let component: ModalAfirPresenComponent;
  let fixture: ComponentFixture<ModalAfirPresenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAfirPresenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAfirPresenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
