import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFamComponent } from './header-fam.component';

describe('HeaderFamComponent', () => {
  let component: HeaderFamComponent;
  let fixture: ComponentFixture<HeaderFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
