export const Styles = {



    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 10,
        textAlign: 'center',
        minHeight: '400px',
        flexGrow: 1
    },
    icon: {
        fontSize: 80,
        color: '#ccc',
        mb: 2,
        animation: 'fadeIn 1.5s ease-in-out',
        '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },
    },
    title: {
        fontWeight: 'bold',
        color: '#333',
        mb: 1,
    },
    description: {
        maxWidth: '400px',
        mb: 4,
        color: 'text.secondary',
    },
    button: {
        color: 'white',
        borderColor: 'primary.main',
        textTransform: 'none',
        borderRadius: '12px',
        px: 5,
        py: 1,
        fontSize: '1rem',
        fontWeight: '600',
        borderWidth:"1px",
        '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'white',
            color:"primary.main",
            border: '1px solid',
        },
    },
};



