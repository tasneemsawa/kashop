import { useMutation, useQueryClient } from '@tanstack/react-query'
import AxiosAuthInstance from '../API/AxiosAuthInstance';
import Swal from 'sweetalert2';
import i18n from 'i18next';

export default function useUpdateProfile() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(data) =>{
            return await AxiosAuthInstance.patch('/Profile', data);
        }, onSuccess: () =>{
            queryClient.invalidateQueries({ querykey: ['profile'] });
            Swal.fire({ icon: 'success', title: i18n.t("profile_updated"), timer: 1500, showConfirmButton: false });
        }, onError: (error) =>{
            Swal.fire({ icon: 'error', title: i18n.t("update_failed"), text: error.response?.data?.message || "Check your data" });
        }
    });
}
