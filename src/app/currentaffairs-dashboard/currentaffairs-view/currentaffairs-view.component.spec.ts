import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaffairsViewComponent } from './currentaffairs-view.component';

describe('CurrentaffairsViewComponent', () => {
  let component: CurrentaffairsViewComponent;
  let fixture: ComponentFixture<CurrentaffairsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentaffairsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentaffairsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
