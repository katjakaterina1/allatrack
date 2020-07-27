import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProductsComponent } from './usr-products.component';

describe('UsrProductsComponent', () => {
  let component: UsrProductsComponent;
  let fixture: ComponentFixture<UsrProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
