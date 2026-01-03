const Styles={

viewAll:{ color: 'muted.main', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: "14px", fontWeight: 500 },
swiperButton:{
    position: 'absolute',
    transition: 'all 0.3s ease-in-out',
    top: '40%',
    zIndex: 10,
    bgcolor: '#163E65',
    color: '#fff',
    transform: 'translateY(20px)',
    visibility: 'hidden',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    '&:hover': { bgcolor: '#163E65',},
    display: { xs: 'none', md: 'flex' },
},
catName:{ padding: "4px 10px", borderRadius: "300px", backgroundColor: "#0f3460", color: "white", zIndex: 2, fontSize: "10px", fontWeight: 600, textAlign: "center" },
cateNumber:{ borderRadius: "8px", objectFit: 'contain', width: '100%', height: '130%', display: 'block', }

}

export default Styles