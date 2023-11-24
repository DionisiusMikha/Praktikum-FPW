import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './app/store'

  // untuk menggunakan redux, kita harus wrap component kita dengan Provider, lalu passingkan store redux yang sudah kita buat
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
