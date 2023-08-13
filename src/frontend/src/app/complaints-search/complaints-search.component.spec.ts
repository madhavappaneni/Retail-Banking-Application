import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsSearchComponent } from './complaints-search.component';

describe('ComplaintsSearchComponent', () => {
  let component: ComplaintsSearchComponent;
  let fixture: ComponentFixture<ComplaintsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
