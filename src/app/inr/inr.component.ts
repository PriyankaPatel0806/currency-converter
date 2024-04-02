import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inr',
  templateUrl: './inr.component.html',
  styleUrl: './inr.component.css'
})
export class InrComponent implements OnInit{
  @Input() inr: BehaviorSubject<Number> = new BehaviorSubject<Number>(0);
  @Output() sendINRVal: EventEmitter<Number> = new EventEmitter<Number>();

  inrVal: Number = 0;
  constructor(){}
  ngOnInit(): void {
    this.inr.subscribe(num=> {
      this.inrVal = num;
    });
  }
  changeINR(){
    this.sendINRVal.emit(this.inrVal);
  }
}
