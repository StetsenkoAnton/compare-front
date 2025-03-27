import { Component, input, ViewEncapsulation } from '@angular/core'

interface ChildProps {
  msg: number
}

@Component({
  selector: 'app-base-cell',
  imports: [],
  templateUrl: './base-cell.component.html',
  styleUrl: './base-cell.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BaseCellComponent {
  msg = input(0);
}
