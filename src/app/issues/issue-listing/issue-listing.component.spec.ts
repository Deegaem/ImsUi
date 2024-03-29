import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IssueListingComponent } from './issue-listing.component';

describe('IssueListingComponent', () => {
  let component: IssueListingComponent;
  let fixture: ComponentFixture<IssueListingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
