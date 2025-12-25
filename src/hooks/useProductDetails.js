import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export default function useProductDetails(id){
    const fetchProductDetails=async()=>{
        const response= await axiosInstance.get(`Products/${id}?lang=en`);
        console.log(response);
        return response.data;
    }
    const query=useQuery({
        queryKey:['productDetails', id],
        staleTime:10 * 60 *1000,
        queryFn: fetchProductDetails,
    });
    
    return query;
}