import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCareersComponent } from './usr-careers.component';

describe('UsrCareersComponent', () => {
  let component: UsrCareersComponent;
  let fixture: ComponentFixture<UsrCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
