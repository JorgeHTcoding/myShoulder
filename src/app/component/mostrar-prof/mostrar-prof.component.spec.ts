import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProfComponent } from './mostrar-prof.component';

describe('MostrarProfComponent', () => {
  let component: MostrarProfComponent;
  let fixture: ComponentFixture<MostrarProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
