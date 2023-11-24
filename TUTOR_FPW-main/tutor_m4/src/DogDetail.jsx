import { useState, useEffect } from 'react'
import client from './client'

const DogDetail = (props) => {
  const [dog,setDog] = useState(null)
  const fetchDog = async ()=>{
    const getDog = await client.get(`/breeds/${props.id}`)
    setDog(getDog.data)
  }
  useEffect(()=>{
    fetchDog()
  },[])
  return (
    <>
    <button onClick={()=>{
      props.setRoute("list")
    }}>Back</button> 
      {!dog && <div>Loading...</div>} {/*Bisa langsung begini karena default state isinya null */} 
      {dog && <> 
        <h2>{dog.name}'s Detail</h2>
        <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Picture of ${props.name}`} style={{
        width:"200px",
        objectFit:"cover"
      }}/>
        <p>Bred for : {dog.bred_for}</p>
        <p>Life span : {dog.life_span}</p>
        <p>Temperament : {dog.temperament}</p>
        <p>Origin : {dog.origin}</p>
      </> } 
    </>
  )
}

export default DogDetail