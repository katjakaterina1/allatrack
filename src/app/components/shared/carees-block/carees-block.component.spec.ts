import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareesBlockComponent } from './carees-block.component';

describe('CareesBlockComponent', () => {
  let component: CareesBlockComponent;
  let fixture: ComponentFixture<CareesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
