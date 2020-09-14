import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistprofilePage } from './specialistprofile.page';

describe('SpecialistprofilePage', () => {
  let component: SpecialistprofilePage;
  let fixture: ComponentFixture<SpecialistprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
