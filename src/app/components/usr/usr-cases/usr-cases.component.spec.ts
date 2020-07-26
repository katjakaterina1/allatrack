import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCasesComponent } from './usr-cases.component';

describe('UsrCasesComponent', () => {
  let component: UsrCasesComponent;
  let fixture: ComponentFixture<UsrCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
