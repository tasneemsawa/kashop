import { useTranslation } from 'react-i18next';

export default function Translate(strings) {
    const { t } = useTranslation();

  return (t(strings))
}



export function isRtl (){
    const { i18n } = useTranslation();

 return i18n.language !== 'ar';
}

