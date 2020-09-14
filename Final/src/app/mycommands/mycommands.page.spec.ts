import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycommandsPage } from './mycommands.page';

describe('MycommandsPage', () => {
  let component: MycommandsPage;
  let fixture: ComponentFixture<MycommandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycommandsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycommandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
