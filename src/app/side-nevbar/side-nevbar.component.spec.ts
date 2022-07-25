import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNevbarComponent } from './side-nevbar.component';

describe('SideNevbarComponent', () => {
  let component: SideNevbarComponent;
  let fixture: ComponentFixture<SideNevbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNevbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNevbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
