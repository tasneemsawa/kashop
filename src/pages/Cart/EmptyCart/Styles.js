export const Styles = {

    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        p: 3
    },
    subView: {
        width: 150,
        height: 150,
        borderRadius: '50%',
        bgcolor: '#fcebed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3
    },
    goShopping:{
        bgcolor: '#E94560',
        '&:hover': { bgcolor: '#d33b53' },
        borderRadius: '12px',
        px: 5,
        py: 1,
        textTransform: 'none',
        fontSize: '16px',
        boxShadow: '0px 8px 15px rgba(233, 69, 96, 0.2)'
      }

}