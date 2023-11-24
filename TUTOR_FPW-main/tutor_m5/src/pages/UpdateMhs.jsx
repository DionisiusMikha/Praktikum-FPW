import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { updateMhs } from '../app/mhsSlice';
import { setRoute } from '../app/routeSlice';

const UpdateMhs = () => {
  const { register, handleSubmit, reset } = useForm();

  const listMhs = useSelector((state) => state.mhs.listMhs)
  const updateId = useSelector((state) => state.route.updateId)

  const temp = listMhs.find((mhs)=>mhs.nrp==updateId) //cari data mahasiswa berdasarkan nrp yang dipilih

  const dispatch = useDispatch()
  const actionUpdateMhs = data =>{
    try{
      dispatch(updateMhs(data))
      reset()
      alert("Berhasil mengubah data "+data.nama)
    }catch(e){
      alert(e.message)
    }
  }

  register("nrp",{
    value:updateId
  })
  register("nama",{
    value:temp.nama
  })
  register("jumlah_sks",{
    value:temp.jumlah_sks
  })
  register("gender",{
    value:temp.gender
  })

  return (
    <>
    
    <h1>Update Mahasiswa</h1>
    <button onClick={()=>dispatch(setRoute('list'))}>Back</button> <br /><br />
      <form onSubmit={handleSubmit(actionUpdateMhs)}>
        <label>NRP </label> <input type="text" {...register("nrp")} disabled={true}/> <br />
        <label>Nama </label> <input type="text"  {...register("nama")} /><br />
        <label>Jumlah SKS </label> <input type="number"  {...register("jumlah_sks")} /> <br />
        <label>Gender</label> 
        <input type="radio" name="gender" value={"L"}  {...register("gender")} />Laki-Laki 
        <input type="radio" name="gender" value={"P"}  {...register("gender")}/>Perempuan <br />

        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default UpdateMhs