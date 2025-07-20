import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm } from './reactive-form';

describe('ReactiveForm', () => {
  let component: ReactiveForm;
  let fixture: ComponentFixture<ReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
