import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterProComponent } from './footer-pro.component';

describe('FooterProComponent', () => {
  let component: FooterProComponent;
  let fixture: ComponentFixture<FooterProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
