import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaffairsLandingComponent } from './currentaffairs-landing.component';

describe('CurrentaffairsLandingComponent', () => {
  let component: CurrentaffairsLandingComponent;
  let fixture: ComponentFixture<CurrentaffairsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentaffairsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentaffairsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
