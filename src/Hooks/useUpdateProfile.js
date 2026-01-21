import { useMutation, useQueryClient } from '@tanstack/react-query'
import AxiosAuthInstance from '../API/AxiosAuthInstance';
import Swal from 'sweetalert2';

export default function useUpdateProfile() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(data) =>{
            return await AxiosAuthInstance.patch('/Profile', data);
        }, onSuccess: () =>{
            queryClient.invalidateQueries({ querykey: ['profile'] });
            Swal.fire({ icon: 'success', title: 'Profile Updated!', timer: 1500, showConfirmButton: false });
        }, onError: (error) =>{
            Swal.fire({ icon: 'error', title: 'Update Failed', text: error.response?.data?.message || "Check your data" });
        }
    });
}
