import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectives } from './structural-directives';

describe('StructuralDirectives', () => {
  let component: StructuralDirectives;
  let fixture: ComponentFixture<StructuralDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
