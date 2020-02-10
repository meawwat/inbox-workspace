import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxLibComponent } from './inbox-lib.component';

describe('InboxLibComponent', () => {
  let component: InboxLibComponent;
  let fixture: ComponentFixture<InboxLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
