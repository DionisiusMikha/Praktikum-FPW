import {useSelector, useDispatch} from "react-redux"
import ListMhs from "./pages/ListMhs"
import AddMhs from "./pages/AddMhs"
import UpdateMhs from "./pages/UpdateMhs"
import { useEffect } from "react"
import {setRoute} from "./app/routeSlice"

function App() {

  // Materi minggu ini adalah Redux
  /**  
   * Redux merupakan library untuk melakukan state management 
   * state yang dibuat redux bersifat global, sehingga dapat diakses dari mana saja
   * ini bisa digunakan untuk menghindari props drilling*/

  /**Berikut adalah step2 untuk membuat redux
  1. install react-redux dan reduxjs/toolkit
  2. Buat sebuah file redux slice (penjelasan slice terdapat pada file mhsSlice)
  3. Buatlah sebuah store untuk menyimpan semua slice
  4. Pasang provider (biasanya pada app.jsx atau main.jsx) yang me-wrap semua component
  **/

  //untuk mengakses state pada redux, kita bisa menggunakan useSelector
  const route = useSelector((state) => state.route.route)
  //aksesnya ke state.<nama slice>.<nama state>
  //ingat sifat state ini immutable, sehingga kita hanya bisa ubah datanya dengan menggunakan reducer

  //kita juga bisa gunakan useEffect untuk mentrigger perubahan setiap kali state berubah
  useEffect(()=>{
    console.log("viewing page with route "+route)
  },[route])


  //tidak semua state cocok dengan redux, gunakan redux hanya untuk state yang kira-kira akan digunakan secara global saja

  
  //sebagai tambahan informasi, anda bisa menggunakan extension redux devtools pada chrome untuk melihat perubahan state

  const dispatch = useDispatch() //dispatch adalah function untuk memanggil reducer
  return (
    <>
      <div>
      <h1>Exchange</h1>

      <h3>Materi 5</h3>
      {/* pada kode di bawah, dispatch setRoute akan menjalankan reducer setRoute milik slice route, dengan mengirimkan parameter "list". Nantinya parameter ini bisa diakses dengan action.payload */}
      <button onClick={()=>dispatch(setRoute("list"))}>Exchange</button>
      <button onClick={()=>dispatch(setRoute("add"))}>profile</button> <br /> 

      <span> gold : 100</span>

      {route=="list" && <ListMhs/>}
      {route=="add" && <AddMhs/>}
      {route=="update" && <UpdateMhs/>}
      
      </div>
    </>
  )
}

export default App
