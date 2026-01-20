import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';
import { keepPreviousData } from "@tanstack/react-query";

export default function useFetch(queryKey, url,params={}, inctanse= axiosInstance) {
   const fetchData= async()=>{
        const response= await inctanse.get(url, {params});
        console.log(params);
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
