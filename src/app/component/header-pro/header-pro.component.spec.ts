import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProComponent } from './header-pro.component';

describe('HeaderProComponent', () => {
  let component: HeaderProComponent;
  let fixture: ComponentFixture<HeaderProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
