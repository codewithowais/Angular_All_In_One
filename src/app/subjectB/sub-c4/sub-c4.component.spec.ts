import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubC4Component } from './sub-c4.component';

describe('SubC4Component', () => {
  let component: SubC4Component;
  let fixture: ComponentFixture<SubC4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubC4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubC4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
