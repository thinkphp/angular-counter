import { Component, computed, signal } from '@angular/core';

type Action = 'decrease' | 'increase' | 'reset';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = signal<number>(0);

  color = computed(() => {
    if (this.count() > 0) return 'green';
    if (this.count() < 0) return 'red';
    return 'black';
  });

  handleClick(action: Action): void {
    if (action === 'decrease') {
      this.count.update((value) => value - 1);
    } else if (action === 'increase') {
      this.count.update((value) => value + 1);
    } else {
      this.count.set(0);
    }
  }
}
