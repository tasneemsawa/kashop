export const Styles = {

  title: { fontWeight: 800, color: '#2b3445', fontSize: "25px" },
  headerTitle: {
    display: { xs: 'none', md: 'flex' },
    px: 3, mb: 2,
    color: '#7D879C',
    fontWeight: 600,

  },
  rowView: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'flex-start', md: 'center' },
    bgcolor: 'white',
    mb: 2,
    p: 2,
    px: 3,
    borderRadius: '10px',
    boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0px 8px 20px rgba(3, 0, 71, 0.1)',
    }
  },
  header: { fontSize: "16px", fontWeight: 600, color: "muted.main" },
  orderId: { flex: 1, fontSize: "16px", fontWeight: 600, color: 'secondary.main', mb: { xs: 1, md: 0 } },
  orderStatus: {
    px: 2, py: 0.5,
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 500
  },
  orderDate:{ flex: 1.5, color: 'secondary.main', mb: { xs: 1, md: 0 }},
  arrowButton:{ ml: { xs: 0, md: 'auto' }, alignSelf: { xs: 'flex-end', md: 'center' } }
  

}