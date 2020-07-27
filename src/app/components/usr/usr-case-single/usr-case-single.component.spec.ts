import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCaseSingleComponent } from './usr-case-single.component';

describe('UsrCaseSingleComponent', () => {
  let component: UsrCaseSingleComponent;
  let fixture: ComponentFixture<UsrCaseSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCaseSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCaseSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
