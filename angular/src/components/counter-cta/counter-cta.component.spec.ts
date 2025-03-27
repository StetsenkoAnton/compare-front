import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCtaComponent } from './counter-cta.component';

describe('CounterCtaComponent', () => {
  let component: CounterCtaComponent;
  let fixture: ComponentFixture<CounterCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
