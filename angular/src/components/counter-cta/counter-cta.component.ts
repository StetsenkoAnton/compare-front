import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../../store/counter.actions';

@Component({
  standalone: false,
  selector: 'app-counter-cta',
  templateUrl: './counter-cta.component.html',
  styleUrl: './counter-cta.component.scss'
})
export class CounterCtaComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
