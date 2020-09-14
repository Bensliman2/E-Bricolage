import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisteditPage } from './specialistedit.page';

describe('SpecialisteditPage', () => {
  let component: SpecialisteditPage;
  let fixture: ComponentFixture<SpecialisteditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisteditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisteditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
