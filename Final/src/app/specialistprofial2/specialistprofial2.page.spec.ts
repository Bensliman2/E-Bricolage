import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialistprofial2Page } from './specialistprofial2.page';

describe('Specialistprofial2Page', () => {
  let component: Specialistprofial2Page;
  let fixture: ComponentFixture<Specialistprofial2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Specialistprofial2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialistprofial2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
