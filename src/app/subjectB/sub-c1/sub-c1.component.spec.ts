import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubC1Component } from './sub-c1.component';

describe('SubC1Component', () => {
  let component: SubC1Component;
  let fixture: ComponentFixture<SubC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
