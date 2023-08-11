import './mock'
import App from './App'
import './css/main.less'
import React from 'react'
import { store } from './store'
import '@/assets/css/index.css'
import ReactDOM from 'react-dom/client'
import { fetchUserInfo } from './store/modules/user'

store.dispatch(fetchUserInfo())


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
