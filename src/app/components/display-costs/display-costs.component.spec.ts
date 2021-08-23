import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Costs } from 'src/app/interfaces/Costs.interface';

import { DisplayCostsComponent } from './display-costs.component';

describe('DisplayCostsComponent', () => {
  let component: DisplayCostsComponent;
  let fixture: ComponentFixture<DisplayCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayCostsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCostsComponent);
    component = fixture.componentInstance;

    let expectedCosts: Costs = {
      paidCosts: [14, 12, 987.12],
      name: 'Bob',
      total: 15000,
      id: 0,
    }
    component.costs = expectedCosts;
    fixture.detectChanges();
  });

  it('should addCost()', () => {
    let value = (Math.random() * 100).toFixed(2);
    component.addCost(Number(value));
    expect(component.costs.paidCosts[component.costs.paidCosts.length - 1]).toEqual(Number(value));
  });
});
