import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPage } from './special.page';

describe('SpecialPage', () => {
  let component: SpecialPage;
  let fixture: ComponentFixture<SpecialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
