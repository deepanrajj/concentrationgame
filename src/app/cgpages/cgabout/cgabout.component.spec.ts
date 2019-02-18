import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgaboutComponent } from './cgabout.component';

describe('CgaboutComponent', () => {
  let component: CgaboutComponent;
  let fixture: ComponentFixture<CgaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
