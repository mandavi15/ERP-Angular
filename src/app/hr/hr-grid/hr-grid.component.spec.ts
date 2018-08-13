import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrGridComponent } from './hr-grid.component';

describe('HrGridComponent', () => {
  let component: HrGridComponent;
  let fixture: ComponentFixture<HrGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
