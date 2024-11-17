import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription, map, of } from 'rxjs';

@Component({
  selector: 'app-sample-operators',
  standalone: true,
  imports: [],
  templateUrl: './sample-operators.component.html',
  styleUrl: './sample-operators.component.css'
})
export class SampleOperatorsComponent implements OnInit, OnDestroy{

  subApples!: Subscription;//subscription variable
  subNumbers!: Subscription;

  ngOnInit(): void {
    const apples$ = from([
      { id: 1, type: 'machintosh' },
      { id: 2, type: 'gala' },
      { id: 3, type: 'fuji' },
    ]);//observable

    this.subApples = apples$
      .pipe(//pipe passes operators to observables
        map(a => ({...a, color: 'red'}))
      ).subscribe(x => console.log('Apple:', x));

    
    this.subNumbers = of(2,4,7)
      .pipe(
        map(item => item * 2)
      ).subscribe(n => console.log('Multiplies:', n));

  }

  ngOnDestroy(): void {
      this.subApples.unsubscribe();
  }
}
