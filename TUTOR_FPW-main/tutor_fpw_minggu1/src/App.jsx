import Item from './models/item'
import CatalogSection from './components/CatalogSection.jsx'
import {Fragment} from 'react'

// buat tugas, ini cara import json
// import {dogs} from "./dogs.json"


/**
 * Sebuah komponen dengan nama App yang akan berisi Top Navigation Bar dan juga sebuah component descendant dengan nama `ContentSection`.
 * 
 * Komponen ini akan memiliki sebuah daftar instansi dari kelas `Item` yang merupakan daftar barang untuk ditampilkan di dalam aplikasi.
 * 
 * Daftar barang yang terdapat dalam `itemList` akan diberikan ke dalam komponen `CatalogSection` sebagai props untuk kemudian ditampilkan
 * didalam komponen itu.
 * 
 * Komponen ini dalam kasus ini menggunakan sebuah `Fragment` yang memiliki shorthand `<></>`, yaitu sebuah tool bantuan dari React yang
 * memungkinkan komponen ini untuk mengembalikan lebih dari 1 syntax jsx tanpa menggunakan jsx lain seperti `<div></div>` atau hal lainnya
 * yang serupa.
 * 
 * @returns Javascript XML yang berisi navbar dan content section berisi daftar barang.
 */
function App() {
  const itemList = [
    new Item(1, "Baju", 120000, 12),
    new Item(2, "Celana", 80000, 8),
    new Item(3, "Jaket", 250000, 9),
    new Item(4, "Sweater", 220000, 3),
  ];

  return (
    <Fragment>
      <nav className='navbar bg-light text-white'>
        <div className='container'>
          <a href="#" className='navbar-brand'>ECommerce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a href="#" aria-current="page" className='nav-link'>Home</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>Catalog</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container">
        <CatalogSection items={itemList} />
      </div>



      {/* ini buat tugas */}
      {/* <div className="container">
      <h2>Buat Tugas</h2>
      {dogs.map((dog,index) => {
        return(
          <div key={index}>
            <img src={dog.img} width={200} />
            {dog.nama}
          </div>
          )
      })}
      </div> */}
    </Fragment>
  )
}

export default App
