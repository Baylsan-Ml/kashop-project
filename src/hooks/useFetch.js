import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';

export default function useFetch(queryKey, url) {
   const fetchData= async()=>{
        const response= await axiosInstance.get(url);
        console.log(response.data.response.data);
        return response.data;
    }
    const query = useQuery({
        queryKey:[queryKey],
        staleTime:10 * 60 *1000,
        queryFn: fetchData
    })

    return query;
}
