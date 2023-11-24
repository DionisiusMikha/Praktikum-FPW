import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    listMhs:[
      {
        "nama": "Enrico",
        "nrp": "220180199",
        "jumlah_sks" : 123,
        "gender": "L"
      },
      {
        "nama": "Cherilyn",
        "nrp": "220116109",
        "jumlah_sks" : 124,
        "gender": "P"
      },
      {
        "nama": "Mikhael",
        "nrp": "220116119",
        "jumlah_sks" : 123,
        "gender": "L"
      },
      {
        "nama": "Ian",
        "nrp": "220110113",
        "jumlah_sks" : 123,
        "gender": "L"
      },
      {
        "nama": "Arel",
        "nrp": "219110101",
        "jumlah_sks" : 144,
        "gender": "L"
      },
      {
        "nama": "Marcell",
        "nrp": "220110115",
        "jumlah_sks" : 123,
        "gender": "L"
      }
    ],
}

//Slice merupakan kumpulan logic dari reducer redux
//dalam method createSlice, dibutuhkan 3 properties yaitu nama slice, initial state dari slice, dan reducers
//reducers merupakan logic yang dibuat untuk melakukan perubahan pada state redux, supaya sifatnya tetap immutable 
export const mhsSlice = createSlice({
    name:"mhs",
    initialState,
    reducers:{
        addMhs : (state, action) => {
          const index = state.listMhs.findIndex((mhs) => mhs.nrp === action.payload.nrp)
          if(index>-1){
            throw new Error("NRP sudah dipakai")
          }
            state.listMhs.push(action.payload)
        },
        updateMhs : (state, action) => {
          const index = state.listMhs.findIndex((mhs) => mhs.nrp === action.payload.nrp)
          if(index==-1){
            throw new Error("NRP tidak ditemukan")
          }
          state.listMhs[index] = action.payload
        },
        deleteMhs : (state, action) => {
          const index = state.listMhs.findIndex((mhs) => mhs.nrp === action.payload)
          if(index==-1){
            throw new Error("NRP tidak ditemukan")
          }
          state.listMhs.splice(index, 1)
      },
    }
})

//jangan lupa export reducersnya
export const {addMhs,updateMhs,deleteMhs} = mhsSlice.actions

export default mhsSlice.reducer