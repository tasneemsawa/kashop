export const Styles = {
  card: { borderRadius: '12px', position: 'relative', boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',cursor: 'pointer', '&:hover': { boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' } },

  cardMedia: { borderRadius: '12px 12px 0 0', width: "100%", objectFit: 'fill', },
  productName: { overflow: "hidden", fontWeight: 600, fontSize: "14px", color: "secondary" },
  price: { fontSize: '14px', fontWeight: 600 },
  addButoon: { border: '0.5px solid #E94560', borderRadius: '4px', color: 'primary.main', '&:hover': { backgroundColor: "primary.main", color: "white" } },
  addIcon: { '&:hover': { backgroundColor: "primary.main", color: "white" } }
};
