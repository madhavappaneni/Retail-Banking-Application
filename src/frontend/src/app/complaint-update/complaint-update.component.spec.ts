import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintUpdateComponent } from './complaint-update.component';

describe('ComplaintUpdateComponent', () => {
  let component: ComplaintUpdateComponent;
  let fixture: ComponentFixture<ComplaintUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
