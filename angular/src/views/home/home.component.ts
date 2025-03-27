import { Component } from '@angular/core';
import { BaseTableComponent } from '../../components/base-table/base-table.component'

@Component({
    selector: 'app-home',
    imports: [BaseTableComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
