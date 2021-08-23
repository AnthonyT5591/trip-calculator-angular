import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'add-costs-form',
  templateUrl: './add-costs-form.component.html',
  styleUrls: ['./add-costs-form.component.css']
})
export class AddCostsFormComponent implements OnInit {

  cost: number;
  @Output() addCostEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  determineValid(value) {
    if (Number(value)) {
      return true;
    } else {
      return false;
    }

  }
  onChange() {
    if (Number(this.cost)) {
      this.cost = Number(Number(this.cost).toFixed(2));
    }
  }
  onSubmit() {
    this.addCostEvent.emit(this.cost);
    this.cost = null;
  }
}
