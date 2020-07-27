import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCareersApplyComponent } from './usr-careers-apply.component';

describe('UsrCareersApplyComponent', () => {
  let component: UsrCareersApplyComponent;
  let fixture: ComponentFixture<UsrCareersApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCareersApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCareersApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
