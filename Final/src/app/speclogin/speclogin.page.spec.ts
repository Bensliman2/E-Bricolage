import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecloginPage } from './speclogin.page';

describe('SpecloginPage', () => {
  let component: SpecloginPage;
  let fixture: ComponentFixture<SpecloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
