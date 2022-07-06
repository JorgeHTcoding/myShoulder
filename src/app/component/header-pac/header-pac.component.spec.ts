import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPacComponent } from './header-pac.component';

describe('HeaderPacComponent', () => {
  let component: HeaderPacComponent;
  let fixture: ComponentFixture<HeaderPacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
