import { useMutation, useQueryClient } from '@tanstack/react-query'
import AxiosAuthInstance from '../API/AxiosAuthInstance';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
export default function useUpdateEmail() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async({NewEmail}) =>{
            return await AxiosAuthInstance.patch('/Profile/change-email', {NewEmail});
        }, onSuccess: ()=>{
            queryClient.invalidateQueries({querykey: ['profile']});
            Swal.fire({ icon: 'success', title:i18n.t("email_change_success") , timer: 1500, showConfirmButton: false });
        }, onError: (error) => {
            Swal.fire({ icon: 'error', title: i18n.t("email_change_error"), text: error.response?.data?.message || "Invalid Email" });
        }
    });
}
