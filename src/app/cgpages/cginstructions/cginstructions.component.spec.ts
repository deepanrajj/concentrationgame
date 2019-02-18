import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CginstructionsComponent } from './cginstructions.component';

describe('CginstructionsComponent', () => {
  let component: CginstructionsComponent;
  let fixture: ComponentFixture<CginstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CginstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CginstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
