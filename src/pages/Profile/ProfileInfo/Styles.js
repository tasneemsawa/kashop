export const Styles = {

  headerView:{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 },
  personIcon:{ color: "primary.main", fontSize: 30 },
  personView:{ display: 'flex', alignItems: 'center', gap: 1 },
  edit_profileButton:{ 
    bgcolor: "primary.main", 
    textTransform: "none", 
    px: 4, 
    borderRadius: "8px",
    border:"1px solid transparent",
    '&:hover': { bgcolor: "white",border:"1px solid #E94560",color:"primary.main" } 
  },
  paperView:{ p: 3, borderRadius: "10px", display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' },
  avatarView:{ width: 64, height: 64, bgcolor: "primary.main", color: "white", fontSize: 24, fontWeight: 700 },
  StatsTotal:{ fontWeight: 700, color: "primary.main" },
  StatsLable:{ color: "#7D879C", lineHeight: 1.2, display: 'block', mt: 0.5 },
  StatsView:{ py: 4, textAlign: 'center', borderRadius: "10px" },

}