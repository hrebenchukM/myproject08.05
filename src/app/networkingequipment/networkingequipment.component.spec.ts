import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingequipmentComponent } from './networkingequipment.component';

describe('NetworkingequipmentComponent', () => {
  let component: NetworkingequipmentComponent;
  let fixture: ComponentFixture<NetworkingequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkingequipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkingequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
