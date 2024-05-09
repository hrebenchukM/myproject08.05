import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablesadaptersComponent } from './cablesadapters.component';

describe('CablesadaptersComponent', () => {
  let component: CablesadaptersComponent;
  let fixture: ComponentFixture<CablesadaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CablesadaptersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablesadaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
