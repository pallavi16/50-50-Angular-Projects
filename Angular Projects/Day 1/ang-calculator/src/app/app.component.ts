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
  title = 'ang-calculator';

  funcT: any = 'NoFunction';
  calNumber: string = 'noVal';
  calcValue: number = 0;
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  onClickValue(val: string, type:any) {
   if (type === 'number') {
    this.onNumberClick(val);
   }
   else if (type === 'function') {
    this.onFunctionClick(val);
   }
  }

  onNumberClick(val:string) {

      if(this.calNumber !== 'noVal') {
          this.calNumber = this.calNumber + val;
      }
      else {
          this.calNumber = val;
      }
      this.calcValue = parseFloat(this.calNumber);
      
  }

  onFunctionClick(val:string) {

    if(this.funcT === 'c') {
       this.clearAll();

    }

   else if(this.funcT !== 'NoFunction') {
      this.secondNumber = this.calcValue;    
      this.valueCalculate(val);
      console.log("2: " + this.secondNumber);
  }
  else {
      this.firstNumber = this.calcValue;
      this.calcValue = 0;
      this.calNumber = 'noVal';
      this.funcT = val;
      console.log("1: " + this.firstNumber);
  }

  
  }

  valueCalculate(val: string) {

    switch(this.funcT) {
                case '+' : this.result = this.firstNumber + this.secondNumber; break;
                case '-' : this.result = this.firstNumber - this.secondNumber; break;
                case '*' : this.result = this.firstNumber * this.secondNumber; break;
                case '/' : this.result = this.firstNumber / this.secondNumber; break;
                case '%' : this.result = ((this.firstNumber)/100) * this.secondNumber; break;
                case '=' : this.onEqualPress(); break;
               }
               this.calcValue = parseFloat(this.result.toFixed(3));
               this.firstNumber = this.result;
               this.secondNumber = 0;
               this.calNumber = 'noVal';
               this.funcT = val;
           

  }

  onEqualPress() {
    this.firstNumber  = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noVal';

  }

  clearAll() {
    this.firstNumber  = 0;
    this.secondNumber = 0;
    this.calcValue  =0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noVal';
  }






//   onNumberClick(val:string) {
//     if(this.calNumber !== 'noVal' && this.funcT === 'NoFunction') {
//       this.calNumber = this.calNumber + val;
//     }
//     else if(this.calNumber === 'noVal' && this.funcT === 'NoFunction') {
//       this.calNumber = val;
//     }

//     if (this.secondNumber === 'noVal') {
//       this.calcValue = parseFloat(this.calNumber);
//       console.log(this.calcValue);
//     }
     
   

//     if (this.funcT !== 'NoFunction' 
//       && this.calNumber !== 'noVal' && this.secondNumber!== 'noVal') {
//         this.secondNumber = this.secondNumber + val;
//     }
//     else if (this.funcT !== 'NoFunction' 
//     && this.calNumber !== 'noVal' && this.secondNumber === 'noVal') {
//         this.secondNumber = val;
//     }

//     if(this.secondNumber !== 'noVal') {
//       this.calcValue = 0;
//       this.calcValue = parseFloat(this.secondNumber);
//       console.log(this.calcValue);
    
//     }

// }

//   onFunctionClick(val: string) {
    
//     if(val === 'c') {
//       this.calcValue = 0;
//       this.calNumber = 'noVal';
//       this.funcT = 'NoFunction';
//       this.secondNumber = 'noVal';
//     }

  
//     if (val === '+' || val === '-' || val === '*' || val === '/' || val === '%') {
//       if(this.calNumber !== 'noVal') {
//         this.funcT = val;
//       }
      
//     }


//     if(this.calNumber!== 'noVal' && val === '.') {
//       this.calNumber = this.calNumber + val;   
//     }

//     if(this.secondNumber!== 'noVal' && val === '.') {
//       this.secondNumber = this.secondNumber + val;   
//     }

//     if (val === '=') {
//       console.log("calNumber is : " + this.calNumber);
//       console.log("secondNumber is : " + this.secondNumber);
//       if(this.calNumber!== 'noVal' && this.secondNumber!== 'noVal') {
        
//         switch(this.funcT) {
//           case '+' : this.result = parseFloat(this.calNumber) + parseFloat(this.secondNumber); break;
//           case '-' : this.result = parseFloat(this.calNumber) - parseFloat(this.secondNumber); break;
//           case '*' : this.result = parseFloat(this.calNumber) * parseFloat(this.secondNumber); break;
//           case '/' : this.result = parseFloat(this.calNumber) / parseFloat(this.secondNumber); break;
//           case '%' : this.result = (parseFloat(this.calNumber)/100) * parseFloat(this.secondNumber); break;
//         }
//           this.result = parseFloat(this.result.toFixed(3));
//       }
//       console.log(this.result); 
//       console.log(this.funcT);
//       this.calcValue = this.result;
//     }


//   }
}

