import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreServiceComponent } from './firestore-service.component';

describe('FirestoreServiceComponent', () => {
  let component: FirestoreServiceComponent;
  let fixture: ComponentFixture<FirestoreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestoreServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
