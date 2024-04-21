import axios from "axios";

const NEXT_PUBLIC_API_URL = "http://localhost:3000/api/v1"
const productServices = {
    createProduct: async (token:any, data:any) => {
        return axios.post(
          `${NEXT_PUBLIC_API_URL}/create-product`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          }
        );
      },
}


export default productServices;