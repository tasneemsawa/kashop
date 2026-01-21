import { useMutation } from '@tanstack/react-query'
import AxiosAuthInstance from '../API/AxiosAuthInstance';
import Swal from 'sweetalert2';

export default function useUpdatePassword() {
    return useMutation({
        mutationFn: async (data) => {
            return await AxiosAuthInstance.patch('/Profile/change-password', data);
        },
        onSuccess: () => {
            Swal.fire({ icon: 'success', title: 'Password Changed!', text: 'Your security is updated.', timer: 2000, showConfirmButton: false });           
           
        },
        onError: (error) => {
            Swal.fire({ icon: 'error', title: 'Failed to Change Password', text: error.response?.data?.message || "Current password might be wrong" });
        }
    });
}
