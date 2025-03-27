import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheHeaderComponent } from '../components/the-header/the-header.component'
import { CounterCtaComponent } from '../components/counter-cta/counter-cta.component'

@Component({
    standalone: false,
    selector: 'app-root',
    imports: [RouterOutlet, TheHeaderComponent, CounterCtaComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular'
}
