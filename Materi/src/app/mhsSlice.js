import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    listMhs:[
      {
        "harga": 10,
        "nama": "ZXCV",
      },
      {
        "harga": 25,
        "nama": "QWER",
      },
      {
        "harga": 50,
        "nama": "WASD",
      },
    ],
    Profile:[
      {
        "Money": 100,
        "day" : 1 
      }
    ]
}

//Slice merupakan kumpulan logic dari reducer redux
//dalam method createSlice, dibutuhkan 3 properties yaitu harga slice, initial state dari slice, dan reducers
//reducers merupakan logic yang dibuat untuk melakukan perubahan pada state redux, supaya sifatnya tetap immutable 
export const mhsSlice = createSlice({
    name:"mhs",
    initialState,
    reducers:{
        addMhs : (state, action) => {
          const index = state.listMhs.findIndex((mhs) => mhs.harga === action.payload.nama)
          if(index>-1){
            throw new Error("nama sudah dipakai")
          }
            state.listMhs.push(action.payload)
        },
        updateMhs : (state, action) => {
          const index = state.listMhs.findIndex((mhs) => mhs.harga === action.payload.harga)
          if(index==-1){
            throw new Error("harga tidak ditemukan")
          }
          state.listMhs[index] = action.payload
        },
        updateProfile : (state, action) => {
          const index = state.Profile.findIndex((profile) => mhs.harga === action.payload.harga)
          if(index==-1){
            throw new Error("harga tidak ditemukan")
          }
          state.listMhs[index] = action.payload
        },
        deleteMhs : (state, action) => {
          const index = state.listMhs.findIndex((mhs) => mhs.nama === action.payload)
          if(index==-1){
            throw new Error("nama tidak ditemukan")
          }
          state.listMhs.splice(index, 1)
      },
    }
})

//jangan lupa export reducersnya
export const {addMhs,updateMhs,deleteMhs} = mhsSlice.actions

export default mhsSlice.reducer