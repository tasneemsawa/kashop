const Styles = {

    hero: {
        backgroundColor: 'white',
        padding: '60px 0',
        '& .swiper-pagination-bullet-active': {
            backgroundColor: 'primary.main',


        },
        "& .swiper-pagination-bullet": {
            width: '20px',
            borderRadius: '12px'
        }
    },

    title: {
        fontWeight: '800',
        color: 'secondary.main',
        fontSize: { xs: '30px', md: '50px' },
        marginBottom: "20px"

    },

    description: {
        color: 'ke.main', mb: 4, fontSize: "14px", fontWeight: 500
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '400px',
        objectFit: 'contain',
    },
    shopButton: {
        backgroundColor: 'primary.main',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: 600,
        borderRadius: "8px",
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#d63a54',
        },
    }










}
export default Styles