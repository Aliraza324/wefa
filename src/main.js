import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './utils/whyDidYouRender.js'
import './index.css'
import { AppProviders } from './app/providers.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  createElement(
    StrictMode,
    null,
    createElement(
      AppProviders,
      null,
      createElement(App),
    ),
  ),
)
