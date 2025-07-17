import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirective } from './attribute-directive';

describe('AttributeDirective', () => {
  let component: AttributeDirective;
  let fixture: ComponentFixture<AttributeDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
