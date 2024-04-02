import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrl: './usd.component.css'
})
export class UsdComponent implements OnInit {
  @Input() usd: BehaviorSubject<Number> = new BehaviorSubject<Number>(0);
  @Output() sendUSDVal: EventEmitter<Number> = new EventEmitter<Number>();
  usdVal: Number = 0;
  constructor() {

  }
  ngOnInit() {
    this.usd.subscribe(num => {
      this.usdVal =num;
    });
  }
  changeUSD() {
    this.sendUSDVal.emit(this.usdVal);
  }
}
