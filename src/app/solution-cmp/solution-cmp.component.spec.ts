import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCmpComponent } from './solution-cmp.component';

describe('SolutionCmpComponent', () => {
  let component: SolutionCmpComponent;
  let fixture: ComponentFixture<SolutionCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
