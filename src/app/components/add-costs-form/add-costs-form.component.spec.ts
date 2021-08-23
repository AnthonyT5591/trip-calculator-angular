import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddCostsFormComponent } from './add-costs-form.component';

describe('AddCostsFormComponent', () => {
  let component: AddCostsFormComponent;
  let fixture: ComponentFixture<AddCostsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCostsFormComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should determineValid(value) = true', () => {
    let value = 65165165;
    let res = component.determineValid(value);
    expect(res).toBe(true);
  });

  it('should determineValid(value) = false', () => {
    let value = 'aksjdhf';
    let res = component.determineValid(value);
    expect(res).toBe(false);
  });

  it('should onSubmit() emit addCostEvent', () => {
    component.cost = 30;
    spyOn(component.addCostEvent, 'emit');
    component.onSubmit();

    fixture.detectChanges();
    expect(component.addCostEvent.emit).toHaveBeenCalledWith(30);
  });

  it('should onChange() value.toFixed(2) = true', () => {
    let value = 30.21321;
    component.cost = value;
    component.onChange();

    fixture.detectChanges();
    expect(component.cost).toBe(Number(Number(value).toFixed(2)));
  });

});
