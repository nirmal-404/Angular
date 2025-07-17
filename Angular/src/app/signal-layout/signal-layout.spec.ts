import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLayout } from './signal-layout';

describe('SignalLayout', () => {
  let component: SignalLayout;
  let fixture: ComponentFixture<SignalLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
