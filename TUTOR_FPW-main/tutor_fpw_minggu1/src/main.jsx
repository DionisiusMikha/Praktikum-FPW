import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * ReactDOM adalah sebuah package yang memungkinkan developer untuk memanipulasi DOM di level teratas.
 * 
 * Pada statement dibawah ini, kita memberitahu React untuk membuat sebuah root component sebagai dasar dari aplikasi react kita.
 * Bila kita melihat pada file `index.html` di root folder project ini, maka akan terdapat `<div id="root"></div>` yang akan 
 * digunakan oleh React untuk menjadi root component. Semua component yang kita buat dan gunakan akan ditampilkan di dalam root
 * component ini.
 * 
 * Setelah React membuat sebuah root component, maka method `render()` dipanggil untuk memberitahu React untuk merender semua ReactNode
 * yang diberikan sebagai argumen didalam root component ini. Dalam kasus ini, terdapat 2 hal, yaitu `<React.StrictMode>` dan `<App />`.
 * 
 * `<React.StrictMode>` adalah sebuah tool yang disediakan oleh React untuk memberitahu component-component didalamnya (descendants)
 * untuk melakukan pengecekan-pengecekan ekstra untuk memastikan kualitas kode. Tool ini tidak memiliki visual apapun dan tidak
 * akan menampilkan apapun di root component.
 * 
 * `<App />` adalah sebuah component yang ada di dalam `src/App.jsx` dan digunakan untuk di render didalam root component ini.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
