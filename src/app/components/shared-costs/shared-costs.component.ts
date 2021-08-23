import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Costs } from 'src/app/interfaces/Costs.interface';

@Component({
  selector: 'shared-costs',
  templateUrl: './shared-costs.component.html',
  styleUrls: ['./shared-costs.component.css'],
})
export class SharedCostsComponent implements OnInit, OnChanges {
  @Input() costs: Costs[] = [];

  allCostsTotal: number;
  sharedCostsTotal: number;

  diff: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.determineCosts();
  }

  determineCosts() {
    this.allCostsTotal = 0;
    this.sharedCostsTotal = 0;
    this.diff = [];
    this.costs.forEach(c => {
      this.allCostsTotal += c.total;
    });

    this.sharedCostsTotal = this.allCostsTotal / 3;

    this.costs.forEach(c => {
      this.diff.push({
        difference: Number(Number(this.sharedCostsTotal - c.total).toFixed(2)),
        name: c.name
      })
    })
  }
  ngOnChanges() {
    this.determineCosts();
  }
  determinePayTo() {
    return this.costs.slice().sort((a, b) => b.total - a.total)[0].name;
  }

}
