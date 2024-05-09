import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardmouseComponent } from './keyboardmouse.component';

describe('KeyboardmouseComponent', () => {
  let component: KeyboardmouseComponent;
  let fixture: ComponentFixture<KeyboardmouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardmouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardmouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
