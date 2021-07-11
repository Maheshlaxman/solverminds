import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagecomponentComponent } from './mainpagecomponent.component';

describe('MainpagecomponentComponent', () => {
  let component: MainpagecomponentComponent;
  let fixture: ComponentFixture<MainpagecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
