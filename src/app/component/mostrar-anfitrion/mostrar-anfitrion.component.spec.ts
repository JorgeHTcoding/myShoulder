import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAnfitrionComponent } from './mostrar-anfitrion.component';

describe('MostrarAnfitrionComponent', () => {
  let component: MostrarAnfitrionComponent;
  let fixture: ComponentFixture<MostrarAnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAnfitrionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
