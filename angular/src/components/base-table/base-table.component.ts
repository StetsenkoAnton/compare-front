import { Component } from '@angular/core'
import { BaseCellComponent } from '../base-cell/base-cell.component'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-base-table',
    standalone: true,
    imports: [BaseCellComponent, CommonModule],
    templateUrl: './base-table.component.html',
    styleUrl: './base-table.component.scss',
})
export class BaseTableComponent {
    cols: number[] = [...Array(100)]
    rows: number[] = [...Array(100)]
    trackByItems(index: number): number {
        return index
    }
}
