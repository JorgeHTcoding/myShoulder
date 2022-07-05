import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionPerfilProComponent } from './edicion-perfil-pro.component';

describe('EdicionPerfilProComponent', () => {
  let component: EdicionPerfilProComponent;
  let fixture: ComponentFixture<EdicionPerfilProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionPerfilProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionPerfilProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
