import { useState, useEffect } from "react" 
import DogDetail from "./DogDetail"
import client from "./client" 
import Card from "./Card"
function App() {

  //materi pada minggu ini : react hooks + http request pakai axios
  // Hooks adalah function yang memungkinkan component React mengakses state dan fitur-fitur React lainnya tanpa perlu membuat class sendiri. 
  // Contoh react hook yang sudah dipelajari sebelumnya adalah useState 
  // Contoh hooks yang akan didemokan di sini adalah useEffect
  

  // useEffect adalah hooks yang digunakan untuk mengeksekusi code tertentu ketika terjadi perubahan pada state React
  
  const [route,setRoute] = useState("list")

  //kita inisiasi state untuk menyimpan daftar dogs yang didapat dari API. Kita isi dulu dengan state array kosong
  const [dogs, setDogs] = useState([])
  const [id, setId] = useState(-1) //ini untuk menampung id detail dog
  const [isLoading, setIsLoading] = useState(false)

  const fetchDogs = async ()=>{
    setIsLoading(true) //terkadang react akan menampilkan error apabila kita mencoba akses state yang sifatnya null. Salah satu cara untuk menghindarinya adalah dengan menambahkan loading indicator.

    const getDogs = await client.get("/breeds",{
      params:{
        limit:10
      }
    })
    setDogs(getDogs.data)
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchDogs()
  },[]) 
  /**array pada parameter useEffect ini menunjukkan dependency
   * kita bisa isi array tsb dengan state yang akan dipantau perubahannya.
   * setiap kali ada perubahan pada state tsb, maka useEffect tersebut akan dijalankan kembali 
   * apabila array tsb dikosongkan, maka useEffect tersebut hanya akan dijalankan sekali saja, yaitu ketika pertama kali component di render. Hal ini cocok untuk kita gunakan untuk melakukan inisialisasi data dari API**/

  useEffect(()=>{
    if(id!=-1){ 
      const dog = dogs.find((dog)=>dog.id==id)
      console.log("Hello, viewing dog "+dog.name)
    }
  },[id]) //ini akan dijalankan ketika terjadi perubahan pada state id dog

  return (
    <>
      <div>
        <h1>Tutor M4</h1>
        {route=="list" && <>

          <h2>List of Dogs</h2>
          {isLoading && <div>Loading...</div>}

          <div style={{
            display:"flex",
            flexWrap:"wrap"
          }}> 
            {!isLoading && dogs.map((dog)=>{
              return <Card 
              key={dog.id} 
              setId={setId}
              setRoute={setRoute}
              {...dog}/> //di spread operator untuk mengirimkan semua properti dari object dog ke component Card
            })}
          </div>
        </>}

        {route=="detail" && <DogDetail setRoute={setRoute} id={id}/>}
      </div>
    </>
  )
}

export default App
