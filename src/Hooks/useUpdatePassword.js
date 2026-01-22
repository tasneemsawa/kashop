import { useMutation } from '@tanstack/react-query'
import AxiosAuthInstance from '../API/AxiosAuthInstance';
import Swal from 'sweetalert2';
import i18n from 'i18next';

export default function useUpdatePassword() {
    return useMutation({
        mutationFn: async (data) => {
            return await AxiosAuthInstance.patch('/Profile/change-password', data);
        },
        onSuccess: () => {
            Swal.fire({ icon: 'success', title: i18n.t("password_changed"),timer: 2000, showConfirmButton: false });           
           
        },
        onError: (error) => {
            Swal.fire({ icon: 'error', title:i18n.t("update_failed") , text: error.response?.data?.message || "Current password might be wrong" });
        }
    });
}
