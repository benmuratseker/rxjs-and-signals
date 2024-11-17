import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleOperatorsComponent } from './sample-operators.component';

describe('SampleOperatorsComponent', () => {
  let component: SampleOperatorsComponent;
  let fixture: ComponentFixture<SampleOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleOperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
