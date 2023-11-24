import {useSelector, useDispatch} from "react-redux"
import {setRoute, setUpdateId} from "../app/routeSlice"
import {deleteMhs} from "../app/mhsSlice"

const ListMhs = () => {
  
  const listMhs = useSelector((state) => state.mhs.listMhs)
  const dispatch = useDispatch() //dispatch adalah function untuk memanggil reducer
  return (
    <>
      <h1>List Mahasiswa</h1> <br />
      <table border={1}>
        <thead>
          <tr>
            <th>NRP</th>
            <th>Nama</th>
            <th>Jumlah SKS</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listMhs.map((mhs,index) => {
            return (
              <tr key={index}>
                <td>{mhs.nrp}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.jumlah_sks}</td>
                <td>{mhs.gender}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(setRoute("update"))
                    dispatch(setUpdateId(mhs.nrp))
                  }}>View</button>
                  <button onClick={()=>dispatch(deleteMhs(mhs.nrp))}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListMhs