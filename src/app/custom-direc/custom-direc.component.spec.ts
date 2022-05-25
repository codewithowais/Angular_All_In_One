import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirecComponent } from './custom-direc.component';

describe('CustomDirecComponent', () => {
  let component: CustomDirecComponent;
  let fixture: ComponentFixture<CustomDirecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
