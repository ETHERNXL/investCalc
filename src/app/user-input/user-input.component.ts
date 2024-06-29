import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from './investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  eneteredInitialInvestment = '0';
  eneteredAnnualInvestment = '0';
  expectedreturn = '5';
  duration = '10';

  onSubmit() {
   this.calculate.emit({
    initialInvestment: +this.eneteredInitialInvestment,
    duration: +this.duration,
    expectedReturn: +this.expectedreturn,
    annualInvestment: +this.eneteredAnnualInvestment,
   });
  }
}
