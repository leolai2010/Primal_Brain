import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDComponent } from './exp-d.component';

describe('ExpDComponent', () => {
  let component: ExpDComponent;
  let fixture: ComponentFixture<ExpDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
