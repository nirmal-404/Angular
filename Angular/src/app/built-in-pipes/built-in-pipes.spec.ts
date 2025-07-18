import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipes } from './built-in-pipes';

describe('BuiltInPipes', () => {
  let component: BuiltInPipes;
  let fixture: ComponentFixture<BuiltInPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
