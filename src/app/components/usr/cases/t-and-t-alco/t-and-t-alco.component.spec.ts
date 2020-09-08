import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAndTAlcoComponent } from './t-and-t-alco.component';

describe('TAndTAlcoComponent', () => {
  let component: TAndTAlcoComponent;
  let fixture: ComponentFixture<TAndTAlcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAndTAlcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAndTAlcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
