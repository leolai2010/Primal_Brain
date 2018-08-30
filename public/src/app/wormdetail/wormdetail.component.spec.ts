import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormdetailComponent } from './wormdetail.component';

describe('WormdetailComponent', () => {
  let component: WormdetailComponent;
  let fixture: ComponentFixture<WormdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
