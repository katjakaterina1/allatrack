import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCareersSingleComponent } from './usr-careers-single.component';

describe('UsrCareersSingleComponent', () => {
  let component: UsrCareersSingleComponent;
  let fixture: ComponentFixture<UsrCareersSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCareersSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCareersSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
