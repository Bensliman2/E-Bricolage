import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilPage } from './userprofil.page';

describe('UserprofilPage', () => {
  let component: UserprofilPage;
  let fixture: ComponentFixture<UserprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
