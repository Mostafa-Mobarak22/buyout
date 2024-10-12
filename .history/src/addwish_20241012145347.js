import axios from "axios";
import { Bounce, toast } from "react-toastify";
export async function addToWishList(productId,userId,flag){
    console.log(userId)
    if(!flag){
        let {data} = await axios.post("http://127.0.0.1:8000/user/wishlist/",
            {
                property_ids: productId,
                user_id: Number(userId),
            },
        )
        console.log(data)
        toast.success(  , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
  }