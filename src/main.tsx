import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const CssBaseLine = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CssBaseLine />
  </React.StrictMode>,
  document.getElementById('root')
)
