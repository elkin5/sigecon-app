import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofoundpageComponent } from './nofoundpage.component';

describe('NofoundpageComponent', () => {
  let component: NofoundpageComponent;
  let fixture: ComponentFixture<NofoundpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofoundpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
