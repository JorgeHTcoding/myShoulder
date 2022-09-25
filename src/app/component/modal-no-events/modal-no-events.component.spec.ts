import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNoEventsComponent } from './modal-no-events.component';

describe('ModalNoEventsComponent', () => {
  let component: ModalNoEventsComponent;
  let fixture: ComponentFixture<ModalNoEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNoEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNoEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
