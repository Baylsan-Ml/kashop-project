import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import axiosAuthInstance from '../Api/axiosAuthInstance';

export default function useUpdateEmail() {
    return useMutation({
        mutationFn: async (data) => {
            return await axiosAuthInstance.patch('/Profile/change-email', data);
        },
        onSuccess: () => {
            Swal.fire({ icon: 'success', title: 'Email Updated!', text: 'Your security is updated.', timer: 2000, showConfirmButton: false });           
        },
        onError: (error) => {
            console.log(error);
            Swal.fire({ icon: 'error', title: 'Failed to Update Email..', text: error.response?.data?.message || "Current email might be wrong" });
        }
    });
}