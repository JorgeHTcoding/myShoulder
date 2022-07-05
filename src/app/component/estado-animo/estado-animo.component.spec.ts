import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoAnimoComponent } from './estado-animo.component';

describe('EstadoAnimoComponent', () => {
  let component: EstadoAnimoComponent;
  let fixture: ComponentFixture<EstadoAnimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoAnimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoAnimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
