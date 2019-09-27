import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsListComponent } from './eggs-list.component';

describe('EggsListComponent', () => {
  let component: EggsListComponent;
  let fixture: ComponentFixture<EggsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
