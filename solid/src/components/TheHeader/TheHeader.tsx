import { Component, JSX } from 'solid-js'
import { A } from '@solidjs/router'
import './TheHeader.scss'

const TheHeader: Component<{children: JSX.Element}> = (props) => {
    return (
      <header class="header">
          <nav>
              <A href="/">Home</A>
              <A href="/about">About</A>
          </nav>
          <div class="header">
              {props.children}
          </div>
      </header>
    )
}

export default TheHeader
