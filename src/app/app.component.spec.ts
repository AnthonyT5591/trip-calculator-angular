import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Costs } from './interfaces/Costs.interface';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should updateCost()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let value: Costs = {
      paidCosts: [12, 13, 897, 15.21, 44, .27],
      name: 'Jack',
      total: 19000,
      id: 0,
    }
    app.updateCost(value)
    expect(app.passCosts[0]).toEqual(value);
  });

});
