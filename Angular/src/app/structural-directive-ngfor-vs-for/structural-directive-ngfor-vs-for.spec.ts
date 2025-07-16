import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgforVsFor } from './structural-directive-ngfor-vs-for';

describe('StructuralDirectiveNgforVsFor', () => {
  let component: StructuralDirectiveNgforVsFor;
  let fixture: ComponentFixture<StructuralDirectiveNgforVsFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgforVsFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgforVsFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
