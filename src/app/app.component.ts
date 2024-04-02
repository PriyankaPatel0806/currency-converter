import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'currency-converter';
  inrVal: BehaviorSubject<Number> = new BehaviorSubject<Number>(1);;
  usdVal: BehaviorSubject<Number> = new BehaviorSubject<Number>(83);

  sendINRVal(event: any){
     this.inrVal.next(parseInt(event) / 83);
  }
  sendUSDVal(event: any){
     this.usdVal.next(event * 83);
  }
}
