import logo from './logo.svg'
import React from 'react'
import './app.css'

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>Hello webpack5 + React</p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </p>
    </header>
  </div>
  )
}
export default App