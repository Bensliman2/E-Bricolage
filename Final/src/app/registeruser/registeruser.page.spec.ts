import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteruserPage } from './registeruser.page';

describe('RegisteruserPage', () => {
  let component: RegisteruserPage;
  let fixture: ComponentFixture<RegisteruserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteruserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteruserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
