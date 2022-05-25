import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhostlistner2Component } from './childhostlistner2.component';

describe('Childhostlistner2Component', () => {
  let component: Childhostlistner2Component;
  let fixture: ComponentFixture<Childhostlistner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childhostlistner2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childhostlistner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
