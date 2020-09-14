import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditPage } from './useredit.page';

describe('UsereditPage', () => {
  let component: UsereditPage;
  let fixture: ComponentFixture<UsereditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
