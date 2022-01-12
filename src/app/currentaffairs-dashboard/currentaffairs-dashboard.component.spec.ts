import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaffairsDashboardComponent } from './currentaffairs-dashboard.component';

describe('CurrentaffairsDashboardComponent', () => {
  let component: CurrentaffairsDashboardComponent;
  let fixture: ComponentFixture<CurrentaffairsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentaffairsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentaffairsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
