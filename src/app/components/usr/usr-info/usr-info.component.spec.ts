import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrInfoComponent } from './usr-info.component';

describe('UsrInfoComponent', () => {
  let component: UsrInfoComponent;
  let fixture: ComponentFixture<UsrInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
