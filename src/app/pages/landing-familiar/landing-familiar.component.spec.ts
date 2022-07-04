import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFamiliarComponent } from './landing-familiar.component';

describe('LandingFamiliarComponent', () => {
  let component: LandingFamiliarComponent;
  let fixture: ComponentFixture<LandingFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFamiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
