import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgswitchVsSwitch } from './structural-directive-ngswitch-vs-switch';

describe('StructuralDirectiveNgswitchVsSwitch', () => {
  let component: StructuralDirectiveNgswitchVsSwitch;
  let fixture: ComponentFixture<StructuralDirectiveNgswitchVsSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgswitchVsSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgswitchVsSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
