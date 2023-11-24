import React from 'react'

const Card = (props) => {
  return (
    <div style={{
      border: "1px solid black",
      width:"300px",
      padding:"10px",
      paddingBottom:"40px",
      marginBottom:"20px",
      marginRight:"20px",
    }}
    >
      {props.name} <br />
      <img src={props.image.url} alt={`Picture of ${props.name}`} style={{
        width:"80%",
        height:"200px",
        objectFit:"cover",
        paddingTop:'10px'
      }}/> <br />
      <button 
        onClick={()=>{
          props.setId(props.id)
          props.setRoute("detail")
        }}>View</button>
    </div>
  )
}

export default Card