import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { AppComponent } from './app.component'
import { CounterCtaComponent } from '../components/counter-cta/counter-cta.component'
import { counterReducer } from '../store/counter.reducer'

@NgModule({
    declarations: [AppComponent, CounterCtaComponent],
    imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
