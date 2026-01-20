import { useTranslation } from "react-i18next";

const StylesF = () => {
  const { i18n } = useTranslation();
  return {
    mainSideBar: {
      bgcolor: 'white',
      borderRadius: "8px",
      boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
      color: "secondary.main",
      py: "1rem"
    },
    titleSideBar: {
      fontWeight: 500, color: '#7d7d9c',
      px: "2rem",
      fontSize: "12px"

    },
    buttons: {
      justifyContent: 'flex-start',
      fontSize: "14px",
      textTransform: "none",
      px: 3.5,
      lineHeight: 0,
      py: 0,
      my: 0,
      borderRadius: '0',
      color: 'text.secondary',
      marginBottom: "1rem",
      borderLeft: '4px solid transparent',
      borderRight: '4px solid transparent',
      '& .MuiButton-startIcon': {
        marginInlineEnd: '12px',
        marginInlineStart: '0px',
      },

      '&.active': {
        color: 'primary.main',
        borderLeft: i18n.language == "ar" ? '4px solid transparent' : '4px solid #E94560',
        backgroundColor: "white",
        borderRight: i18n.language == "ar" ? '4px solid #E94560' : '4px solid transparent',

      },
      '&:hover': {
        color: 'primary.main',
        borderLeft: i18n.language == "ar" ? '4px solid transparent' : '4px solid #E94560',
        backgroundColor: "white",
        borderRight: i18n.language == "ar" ? '4px solid #E94560' : '4px solid transparent',

      }
    }

  }
}

export default StylesF