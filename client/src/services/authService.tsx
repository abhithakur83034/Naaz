import axios from "axios";

const NEXT_PUBLIC_API_URL = "http://localhost:4500/api/v1"
const AuthService = {
  register : async (data:any)=>{
    return axios.post(`${NEXT_PUBLIC_API_URL}/register`,data,{
      headers:{
        "Content-Type":"application/json"
    }
    })
  },
login:  async(data:any)=>{
  console.log(data);
  
  return axios.post(`${NEXT_PUBLIC_API_URL}/login`,data,{
    headers:{
        "Content-Type":"application/json"
    }
  })
},
}


export default AuthService;