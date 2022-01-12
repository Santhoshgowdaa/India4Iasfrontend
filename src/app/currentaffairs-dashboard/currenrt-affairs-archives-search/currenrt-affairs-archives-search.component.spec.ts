import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenrtAffairsArchivesSearchComponent } from './currenrt-affairs-archives-search.component';

describe('CurrenrtAffairsArchivesSearchComponent', () => {
  let component: CurrenrtAffairsArchivesSearchComponent;
  let fixture: ComponentFixture<CurrenrtAffairsArchivesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenrtAffairsArchivesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenrtAffairsArchivesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
