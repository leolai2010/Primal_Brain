import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugdetailComponent } from './drugdetail.component';

describe('DrugdetailComponent', () => {
  let component: DrugdetailComponent;
  let fixture: ComponentFixture<DrugdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
