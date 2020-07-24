import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrServicesListComponent } from './usr-services-list.component';

describe('UsrServicesListComponent', () => {
  let component: UsrServicesListComponent;
  let fixture: ComponentFixture<UsrServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
