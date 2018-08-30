import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnMComponent } from './mn-m.component';

describe('MnMComponent', () => {
  let component: MnMComponent;
  let fixture: ComponentFixture<MnMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
