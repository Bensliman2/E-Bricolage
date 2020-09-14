import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomespecPage } from './homespec.page';

describe('HomespecPage', () => {
  let component: HomespecPage;
  let fixture: ComponentFixture<HomespecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomespecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomespecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
