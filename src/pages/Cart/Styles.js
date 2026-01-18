export const Styles = {

    cardMedia: { borderRadius: '12px 0 0 12px', width: "180px", objectFit: 'fill', },
    actionButton: {
        border: '1px solid #E94560', borderRadius: '3px', color: 'primary.main', width: "23px", height: "23px",
        "&:hover": {
            backgroundColor: 'primary.main',
            color: "white"

        }


    },

    card: {
        pr: 2,
        borderRadius: '12px',
        border: '1px solid #f0f0f0',
        position: 'relative',
        boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
    },
    iconButton: { position: 'absolute', top: 10, right: 10, color: 'muted.main' },
    iconButton2: { position: 'absolute', top: 10, left: 10, color: 'muted.main' },

    addButton: {
        backgroundColor: 'primary.main',
        border: '1px solid #E94560',
        color: 'white',
        fontSize: "15px",
        width: 180,
        py: 1,
        transition: '0.3s',
        fontWeight: 800,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'white',
            color: 'primary.main',
            border: '1px solid #E94560 transparent',

        }

    },
    deleteAllButton: {
        border: '1px solid #E94560',
        color: '#E94560',
        fontSize: "15px",
        width: 180,
        py: 1,
        transition: '0.3s',
        fontWeight: 800,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#E94560',
            color: 'white',
            border: '1px solid #E94560 transparent',

        }

    },

}