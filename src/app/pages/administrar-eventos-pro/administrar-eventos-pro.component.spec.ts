import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEventosProComponent } from './administrar-eventos-pro.component';

describe('AdministrarEventosProComponent', () => {
  let component: AdministrarEventosProComponent;
  let fixture: ComponentFixture<AdministrarEventosProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarEventosProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarEventosProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
