import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubC3Component } from './sub-c3.component';

describe('SubC3Component', () => {
  let component: SubC3Component;
  let fixture: ComponentFixture<SubC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubC3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
