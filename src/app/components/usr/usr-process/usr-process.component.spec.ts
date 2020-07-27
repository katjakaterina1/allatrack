import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProcessComponent } from './usr-process.component';

describe('UsrProcessComponent', () => {
  let component: UsrProcessComponent;
  let fixture: ComponentFixture<UsrProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
