import {useSelector, useDispatch} from "react-redux"
import {setRoute, setUpdateId} from "../app/routeSlice"
import { updateMhs } from '../app/mhsSlice';

const ListMhs = () => {
  
  const listMhs = useSelector((state) => state.mhs.listMhs)
  const Profile = useSelector((state) => state.mhs.Profile)
  const dispatch = useDispatch()

  console.log(Profile[0])
  return (
    <> 
    <br />
    <br />
    <br />
    <div>
      <h1> gold :</h1>
    </div>
      {listMhs.map((mhs,index) => {
        return(
        <div key={index}>
          <p>{mhs.nama}</p>
          <p>Harga : {mhs.harga}</p>
          <input type="number" /> <label>0</label>  <button>buy</button>
        </div>
        )
      })}
    </>
  )
}

export default ListMhs