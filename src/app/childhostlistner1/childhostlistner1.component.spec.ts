import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhostlistner1Component } from './childhostlistner1.component';

describe('Childhostlistner1Component', () => {
  let component: Childhostlistner1Component;
  let fixture: ComponentFixture<Childhostlistner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childhostlistner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childhostlistner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
