import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CggameComponent } from './cggame.component';

describe('CggameComponent', () => {
  let component: CggameComponent;
  let fixture: ComponentFixture<CggameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CggameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CggameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
