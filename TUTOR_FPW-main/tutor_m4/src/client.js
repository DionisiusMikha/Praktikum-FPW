import axios from 'axios'

//ini adalah instance dari axios yang sudah di custom dengan baseURL dan headers untuk menampung API Key
const client = axios.create({
  baseURL:"https://api.thedogapi.com/v1",
  headers:{
      "x-api-key":"live_f56okn6PbMuanqHSOx2XwTp4rRx65kxlmiac4TWJrIn09VHl2QrJuTvt0osUFNhq" 
  }
})

export default client