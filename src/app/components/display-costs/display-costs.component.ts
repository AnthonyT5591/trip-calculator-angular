import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Costs } from 'src/app/interfaces/Costs.interface';

@Component({
  selector: 'display-costs',
  templateUrl: './display-costs.component.html',
  styleUrls: ['./display-costs.component.css']
})
export class DisplayCostsComponent implements OnInit {

  @Input() costs: Costs;
  @Output() updateCostEvent = new EventEmitter<Costs>();
  constructor() { }

  ngOnInit(): void {
  }
  addCost(value) {
    this.costs.paidCosts.push(value);
    this.costs.total += value;
    this.updateCostEvent.emit(this.costs);
  }
}

