import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosAuthInstance from '../Api/axiosAuthInstance';

export default function useUpdateProfileInfo() {
    const queryClient= useQueryClient();
  return useMutation({
    mutationFn: async({data})=>
        await axiosAuthInstance.patch(`/Profile`, {
          fullName: data.fullName,
          city:data.city,
          phoneNumber:data.phoneNumber
        }),
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['profile']})
        Swal.fire({ icon: 'success', title: 'Info Updated!', text: 'Your info is updated.', timer: 2000, showConfirmButton: false });           
    },
     onError: (error) => {
        Swal.fire({ icon: 'error', title: 'Failed to Update Info', text: error.response?.data?.message || "Current password might be wrong" });
            }
  })
}
