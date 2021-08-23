import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCostsComponent } from './shared-costs.component';

describe('SharedCostsComponent', () => {
  let component: SharedCostsComponent;
  let fixture: ComponentFixture<SharedCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedCostsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedCostsComponent);
    component = fixture.componentInstance;
    component.costs = [
      {
        paidCosts: [87, 4.12, 11],
        name: 'Louis',
        total: 102.12,
        id: 0,
      },
      {
        paidCosts: [33, 14.11, 2.00, 78],
        name: 'Carter',
        total: 127.11,
        id: 1,
      },
      {
        paidCosts: [10.77, 45],
        name: 'David',
        total: 55.77,
        id: 2,
      }
    ];
    fixture.detectChanges();
  });

  it('should determineCosts()', () => {
    component.determineCosts();
    expect(component.allCostsTotal).toBe(285);
    expect(component.sharedCostsTotal).toBe(285 / 3);
    expect(component.diff).toEqual([
      { //95.67
        difference: -7.12,
        name: 'Louis'
      },
      { //95.67
        difference: -32.11,
        name: 'Carter'
      },
      { //95.67
        difference: 39.23,
        name: 'David'
      }
    ])
  });

  it('should determinePayTo()', () => {
    let value = component.costs.sort((a, b) => b.total - a.total)[0].name;
    expect(value).toBe(component.costs[0].name)
  });
});
