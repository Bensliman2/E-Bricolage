import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterspecPage } from './registerspec.page';

describe('RegisterspecPage', () => {
  let component: RegisterspecPage;
  let fixture: ComponentFixture<RegisterspecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterspecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterspecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
