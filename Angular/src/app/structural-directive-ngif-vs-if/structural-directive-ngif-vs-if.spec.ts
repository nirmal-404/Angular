import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgifVsIf } from './structural-directive-ngif-vs-if';

describe('StructuralDirectiveNgifVsIf', () => {
  let component: StructuralDirectiveNgifVsIf;
  let fixture: ComponentFixture<StructuralDirectiveNgifVsIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgifVsIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgifVsIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
