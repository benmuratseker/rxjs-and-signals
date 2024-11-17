import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-and-signals';

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subStr!: Subscription;
  subEvent!: Subscription;

  ngOnInit(): void {
      this.sub = of(2, 4, 6, 8).subscribe(num => console.log('Value from:', num));
      this.subArray = of([1, 3, 5, 7]).subscribe(num => console.log('Value from of array:', num));
      this.subFrom = from([10, 4, 30, 21]).subscribe({
        next: item => console.log('From item:', item),
        error: err => console.log('From error:', err),
        complete: () => console.log('From complete')
      });
      //.subStr = of('Murat', 'Vika', 'Julia').subscribe(str => console.log('Names from of:', str));
      this.subStr = of('Murat', 'Vika', 'Julia').subscribe({
        next: str => console.log('Names from of:', str),
        error: err => console.log('Error in strings:', err),
        complete: () => console.log('Strings completed')
      });

      // this.subEvent = fromEvent(document, 'click').subscribe({
      //   next: ev => console.log('Click event:', ev.target),
      //   error: err => console.log('Error occured:', err),
      //   complete: () => console.log('No more events')
      // });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
      this.subArray.unsubscribe();
      this.subFrom.unsubscribe();
      // this.subEvent.unsubscribe();
  }
}
