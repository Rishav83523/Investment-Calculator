import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
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
  }
}
