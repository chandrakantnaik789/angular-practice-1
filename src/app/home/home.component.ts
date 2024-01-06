import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  num = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('initializing');
  }

  ngAfterViewInit(): void {
    console.log('initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is the changes', changes);
  }

  ngOnDestroy(): void {
    console.log('Destroying');
  }

  increment(){
    this.num = this.num+1;
  }

  decrement(){
    this.num = this.num-1;
  }

}
