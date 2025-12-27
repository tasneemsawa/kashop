export const Styles = {

    topParPaper: { boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px", p: 2, mb: 3, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 },
    searchText1: { color: 'secondary.main', fontSize: "16px", fontWeight: 600 },
    searchNumber: { color: 'muted.main', fontSize: "14px", fontWeight: 500 },
    searchText: { fontSize: "14px", fontWeight: 600, color: "secondary" },
    sreachInput: {
        fontSize: "14px", fontWeight: 600,
        "& .MuiInputBase-input::placeholder": {
            fontSize: "14px", fontWeight: 400, color: "muted"
        },
        '&:focus': { borderColor: 'primary.main' }
    },
    categoriesTitle: { fontSize: "14px", fontWeight: 600, color: "secondary" },
    categoriesName: { py: 0.5, fontSize: "14px", fontWeight: 600, color: "muted.main", cursor: 'pointer', '&:hover': { color: 'primary.main' } },
    priceRangeTitle: { fontSize: "14px", fontWeight: 600, color: "secondary" },

}