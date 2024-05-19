import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/Header.jsx'
import { Count } from './components/CountDown/Count.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Count />
  </React.StrictMode>,
)
