import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrOverviewComponent } from './usr-overview.component';

describe('UsrOverviewComponent', () => {
  let component: UsrOverviewComponent;
  let fixture: ComponentFixture<UsrOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
