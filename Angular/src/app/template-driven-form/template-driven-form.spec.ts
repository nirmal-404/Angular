import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm } from './template-driven-form';

describe('TemplateDrivenForm', () => {
  let component: TemplateDrivenForm;
  let fixture: ComponentFixture<TemplateDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
