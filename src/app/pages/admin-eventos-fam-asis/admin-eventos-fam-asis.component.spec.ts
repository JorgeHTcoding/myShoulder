import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventosFamAsisComponent } from './admin-eventos-fam-asis.component';

describe('AdminEventosFamAsisComponent', () => {
  let component: AdminEventosFamAsisComponent;
  let fixture: ComponentFixture<AdminEventosFamAsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventosFamAsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventosFamAsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
