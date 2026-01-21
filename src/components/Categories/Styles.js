const Styles = {
    mainBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "50px 0px",
        textAlign: 'center',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#fff',
        boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
        height: '100%',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 12px 25px rgba(0,0,0,0.1)',
        },

    },
    iconCircle: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: '#f3f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "12px",
        color: '#2b3445',

    },
    title: {
        fontWeight: '600',
        color: 'secondary.main',
        fontSize: '17px'

    },



}
export default Styles