import { Component } from '@angular/core';
import { Costs } from './interfaces/Costs.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passCosts: Costs[] = [
    {
      paidCosts: [],
      name: 'Louis',
      total: 0,
      id: 0,
    },
    {
      paidCosts: [],
      name: 'Carter',
      total: 0,
      id: 1,
    },
    {
      paidCosts: [],
      name: 'David ',
      total: 0,
      id: 2,
    }
  ];
  title = 'trip-calc';

  updateCost(value: Costs) {
    this.passCosts[this.passCosts.findIndex(c => c.id == value.id)] = value;
    this.passCosts = this.passCosts.slice();
  }
}
