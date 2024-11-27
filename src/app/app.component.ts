import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = "noValue";

  firstNumber: number = 0;
  secondNumber: number = 0;


  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    }
    else if (type == "function") {
      this.onFuctionClick(val)
    }
  }
  onFuctionClick(val: string) {
    if (val == "c") {
      this.clearAll();
    }
    else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = "noValue";
      this.funcT = val;
    }
    else if (this.funcT != "NoFunction") {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (this.funcT == "+") {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == "-") {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == "*") {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == "/") {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == "%") {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
    }
  }
  private totalAssignValues(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == "=") { this.onEqualPress(); }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = "NoFunction";
    this.calNumber = "noValue";
  }

  clearAll() {
    this.onEqualPress();
    this.calValue = 0
  }

}
