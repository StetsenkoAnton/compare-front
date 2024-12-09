import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import { lazy } from 'solid-js'
import App from './App'
import Home from './views/Home';
import 'solid-devtools'
import './styles/main.scss'

const root = document.getElementById('root')

if (root) render(() => (
    <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={lazy(() => import('./views/About'))} />
    </Router>
), root)
else {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
    )
}
