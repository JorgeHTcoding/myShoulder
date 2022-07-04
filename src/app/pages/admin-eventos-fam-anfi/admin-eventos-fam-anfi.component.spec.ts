import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventosFamAnfiComponent } from './admin-eventos-fam-anfi.component';

describe('AdminEventosFamAnfiComponent', () => {
  let component: AdminEventosFamAnfiComponent;
  let fixture: ComponentFixture<AdminEventosFamAnfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventosFamAnfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventosFamAnfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
