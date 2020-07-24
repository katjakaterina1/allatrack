import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrServiceSingleComponent } from './usr-service-single.component';

describe('UsrServiceSingleComponent', () => {
  let component: UsrServiceSingleComponent;
  let fixture: ComponentFixture<UsrServiceSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrServiceSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrServiceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
