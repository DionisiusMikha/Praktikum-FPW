import { useEffect, useState } from "react"

const SecondPage = () => {
    const [map, setMap] = useState([
        "A","Q","J","K",9
        // "A",2,3,4,5
    ])


    
    const mapHandler = (idxMap)=>{
        map.find((e,index)=>{
            if(e==1){
                map[index] = 0
            } 
        })
        map[idxMap] = 1
        setMap([...map])

    }
    const [number, setNumbers] = useState([
        {
            number: 0
        }
    ])

    const handleSubmit = () => {
        const newNumber = {
            number: number
        }
        setNumbers([...number, newNumber])
    }

console.log(map)
    return(
        <div className="ml-10">
            <h1>0</h1>
            <div className="flex w-1/4">
                {map.map((card,idxMap)=>{
                    return(
                        <div key={idxMap} className="card rounded bg-blue-100 p-3 w-auto m-2 hover:bg-blue-200" onClick={()=>mapHandler(idxMap)}>   
                        
                        {card==2 && <div className=" w-4 h-4">2</div>}
                        {card==3 && <div className=" w-4 h-4">3</div>}
                        {card==4 && <div className=" w-4 h-4">4</div>}
                        {card==5 && <div className=" w-4 h-4">5</div>}
                        {card==6 && <div className=" w-4 h-4">6</div>}
                        {card==7 && <div className=" w-4 h-4">7</div>}
                        {card==8 && <div className=" w-4 h-4">8</div>}
                        {card==9 && <div className=" w-4 h-4">9</div>}

                        {card=="A" && <div className="w-7 h-7 bg-green-500">A</div>}
                        {card=="Q" && <div className="w-7 h-7 bg-yellow-500">Q</div>}
                        {card=="J" && <div className="w-7 h-7 bg-red-500">J</div>}
                        {card=="K" && <div className="w-7 h-7 bg-blue-500">K</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SecondPage