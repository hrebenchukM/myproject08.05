import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerpartsComponent } from './computerparts.component';

describe('ComputerpartsComponent', () => {
  let component: ComputerpartsComponent;
  let fixture: ComponentFixture<ComputerpartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerpartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
