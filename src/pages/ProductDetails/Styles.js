export const Styles = {

    photoGrid: { display: "flex", justifyContent: "flex-end" },
    photo: {
        width: "500px",
        height: "500px",
        borderRadius: '12px',
        objectFit: 'cover',
        display: 'block'
    },
    productName: { color: "secondary.main", fontSize: "30px", fontWeight: 700 },
    prodctuBrandTitle: { color: 'muted.main', fontSize: '14px', mr: 1, fontWeight: 500, },
    prodctuBrand: { color: 'secondary.main', fontSize: '14px', fontWeight: 700, },
    rate: { color: 'muted.main', fontSize: '14px', mr: 1, fontWeight: 500, },
    productPrice: { color: 'primary.main', fontSize: '22px', fontWeight: 700, },
    productQuantity: { fontSize: '14px', fontWeight: 600, },
    addButton: {
        backgroundColor: 'primary.main',
        border: '1px solid #E94560',
        color: 'white',
        fontSize: "12px",
        width: 130,
        transition: '0.3s',
        fontWeight: 600,
        '&:hover': {
            backgroundColor: 'white',
            color: 'primary.main',
            border: '1px solid #E94560 transparent',

        }

    },
    actionButoon: {
        border: '1px solid #E94560',
        borderRadius: '8px',
        color: 'primary.main',
        width: 30,
        height: 30,
        '&:hover': {
            backgroundColor: 'primary.main',
            color: 'white',
        },
        quantity: {
            fontSize: '20px',
            fontWeight: 500,
            color: 'secondary.main',
            mx: 3,
            minWidth: '40px',
            textAlign: 'center',
        }
    },
    tabTitle:{fontSize:"12px",fontWeight:700,},
    specificationTitle:{
        fontWeight: 700,
        color: 'secondary.main',
        mb: 2,
        fontSize: '19px',
      },
}
