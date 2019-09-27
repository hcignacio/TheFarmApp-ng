import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggCreateComponent } from './egg-create.component';

describe('EggCreateComponent', () => {
  let component: EggCreateComponent;
  let fixture: ComponentFixture<EggCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
