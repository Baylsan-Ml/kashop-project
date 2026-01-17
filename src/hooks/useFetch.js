import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';
import { keepPreviousData } from "@tanstack/react-query";

export default function useFetch(queryKey, url, inctanse= axiosInstance) {
   const fetchData= async()=>{
        const response= await inctanse.get(url);
        console.log(response.data);
        return response.data;
    }
    const query = useQuery({
        queryKey:queryKey,
        staleTime:10 * 60 *1000,
        queryFn: fetchData,
        placeholderData: keepPreviousData
    })

    return query;
}
