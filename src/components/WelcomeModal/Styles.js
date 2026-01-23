export const Styles = {
main:{
    position: 'fixed',
    inset: 0,
    zIndex: 11000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
    backdropFilter: 'blur(4px)', 
  },

  paperView:{
    p: 5,
    textAlign: 'center',
    borderRadius: '24px',
    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)',
    border: '1px solid',
    borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
  },



};
