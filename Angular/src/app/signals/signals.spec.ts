import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signals } from './signals';

describe('Signals', () => {
  let component: Signals;
  let fixture: ComponentFixture<Signals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
