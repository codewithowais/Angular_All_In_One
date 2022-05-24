import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubC2Component } from './sub-c2.component';

describe('SubC2Component', () => {
  let component: SubC2Component;
  let fixture: ComponentFixture<SubC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
