import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storage } from './storage';

describe('Storage', () => {
  let component: Storage;
  let fixture: ComponentFixture<Storage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
