import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgfooterComponent } from './cgfooter.component';

describe('CgfooterComponent', () => {
  let component: CgfooterComponent;
  let fixture: ComponentFixture<CgfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
