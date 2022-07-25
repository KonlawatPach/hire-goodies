import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailableTimeComponent } from './unavailable-time.component';

describe('UnavailableTimeComponent', () => {
  let component: UnavailableTimeComponent;
  let fixture: ComponentFixture<UnavailableTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnavailableTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnavailableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
