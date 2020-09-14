import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginPage } from './userlogin.page';

describe('UserloginPage', () => {
  let component: UserloginPage;
  let fixture: ComponentFixture<UserloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
