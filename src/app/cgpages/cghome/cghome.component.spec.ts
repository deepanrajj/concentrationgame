import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CghomeComponent } from './cghome.component';

describe('CghomeComponent', () => {
  let component: CghomeComponent;
  let fixture: ComponentFixture<CghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
