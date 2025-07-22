import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling2 } from './sibling2';

describe('Sibling2', () => {
  let component: Sibling2;
  let fixture: ComponentFixture<Sibling2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sibling2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibling2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
