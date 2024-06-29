import { Component, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();
  eneteredInitialInvestment = signal('0');
  eneteredAnnualInvestment =  signal('0');
  expectedreturn =  signal('5');
  duration =  signal('10');

  onSubmit() {
   this.calculate.emit({
    initialInvestment: +this.eneteredInitialInvestment(),
    duration: +this.duration(),
    expectedReturn: +this.expectedreturn(),
    annualInvestment: +this.eneteredAnnualInvestment(),
   });
   this.eneteredInitialInvestment.set('0');
   this.eneteredAnnualInvestment.set('0');
   this.expectedreturn.set('5');
   this.duration.set('10');
  }
}
