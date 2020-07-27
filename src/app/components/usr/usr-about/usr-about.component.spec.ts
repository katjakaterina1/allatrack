import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAboutComponent } from './usr-about.component';

describe('UsrAboutComponent', () => {
  let component: UsrAboutComponent;
  let fixture: ComponentFixture<UsrAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
