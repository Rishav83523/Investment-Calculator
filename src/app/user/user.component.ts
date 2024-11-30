import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();
  intialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '1';
  onSubmit() {
    console.log('Form submitted!');
    console.log('Initial Investment: ' + this.intialInvestment);
    console.log('Annual Investment: ' + this.annualInvestment);
    console.log('Expected Return: ' + this.expectedReturn);
    console.log('Duration: ' + this.duration);
    this.calculate.emit({
      initialInvestment: parseFloat(this.intialInvestment),
      annualInvestment: parseFloat(this.annualInvestment),
      expectedReturn: parseFloat(this.expectedReturn),
      duration: parseFloat(this.duration),
    });
  }
}
