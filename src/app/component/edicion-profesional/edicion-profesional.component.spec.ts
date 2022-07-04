import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionProfesionalComponent } from './edicion-profesional.component';

describe('EdicionProfesionalComponent', () => {
  let component: EdicionProfesionalComponent;
  let fixture: ComponentFixture<EdicionProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
