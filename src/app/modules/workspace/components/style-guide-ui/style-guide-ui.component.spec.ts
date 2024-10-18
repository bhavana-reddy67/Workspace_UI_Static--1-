import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGuideUiComponent } from './style-guide-ui.component';

describe('StyleGuideUiComponent', () => {
  let component: StyleGuideUiComponent;
  let fixture: ComponentFixture<StyleGuideUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleGuideUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleGuideUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
