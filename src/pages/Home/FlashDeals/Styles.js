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


}

export default Styles