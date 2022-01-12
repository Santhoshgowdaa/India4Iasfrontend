import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaffairsSearchComponent } from './currentaffairs-search.component';

describe('CurrentaffairsSearchComponent', () => {
  let component: CurrentaffairsSearchComponent;
  let fixture: ComponentFixture<CurrentaffairsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentaffairsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentaffairsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
