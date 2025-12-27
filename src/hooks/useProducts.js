import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export function useProducts (){
    
    const fetchProducts= async()=>{
        console.log('ggg')
        const response= await axiosInstance.get('/Products');
        console.log(response.data.response.data);
        console.log("hhh");
        return response.data.response.data;
    }
    const query = useQuery({
        queryKey:['products'],
        staleTime:10 * 60 *1000,
        queryFn: fetchProducts
    })

    console.log(query);

    return query;
}