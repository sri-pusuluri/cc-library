/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibraryCardV2Component } from './librarycard-v2.component';

describe('LibraryCardV2Component', () => {
  let component: LibraryCardV2Component;
  let fixture: ComponentFixture<LibraryCardV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
