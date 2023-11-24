import React from 'react'
import { useForm } from "react-hook-form";
import { addMhs } from '../app/mhsSlice';
import { useDispatch } from 'react-redux';

const AddMhs = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch()
  const actionAddMhs = data =>{
    try{
      dispatch(addMhs(data))
      reset()
      alert("Berhasil menambahkan data mahasiswa baru")
    }catch(e){
      alert(e.message)
    }
  }
  return (
    <>
      <h1>Add Mahasiswa</h1>
      <form onSubmit={handleSubmit(actionAddMhs)}>
        <label>NRP </label> <input type="text" {...register("nrp")} /> <br />
        <label>Nama </label> <input type="text"  {...register("nama")} /><br />
        <label>Jumlah SKS </label> <input type="number"  {...register("jumlah_sks")} /> <br />
        <label>Gender</label> 
        <input type="radio" name="gender" value={"L"}  {...register("gender")}/>Laki-Laki 
        <input type="radio" name="gender" value={"P"}  {...register("gender")}/>Perempuan <br />

        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddMhs