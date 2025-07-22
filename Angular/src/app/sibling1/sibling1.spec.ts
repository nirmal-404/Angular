import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling1 } from './sibling1';

describe('Sibling1', () => {
  let component: Sibling1;
  let fixture: ComponentFixture<Sibling1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sibling1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibling1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
