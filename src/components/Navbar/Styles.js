export const Styles = {
  navbar: {
    backgroundColor: "white",
    boxShadow: '0px 4px 12px rgba(3, 0, 71, 0.09)',
  },
  logo: {
    display: { xs: 'flex', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',

  },
  searchContainer: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    alignItems: 'stretch',
    maxWidth: '700px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden'

  },
  textFieldStyle: {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input': {
      padding: '10px 14px',
      fontSize: '14px',
      color: '#666',
    },
    '& .MuiInputBase-input::placeholder': {
      color: 'muted.main',
      opacity: 0.8,
    }
  },
  categoriesDropDownSearch: {
    minWidth: 160,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderLeft: '1px solid #e0e0e0',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-select': {
      padding: '10px 14px',
      fontSize: '14px',
      color: '#999',
    },
  },
  cartBadge: {
    '& .MuiBadge-badge': {
      backgroundColor: '#e91e63',
      color: '#fff',
      fontSize: '10px',
      minWidth: '18px',
      height: '18px',
    }
  },
  iconButton: {
    color: '#666',
    backgroundColor: '#f3f5f9',
    borderRadius: "8px",
    padding: "12px 8px",
    '&:hover': {
      backgroundColor: 'primary.main',
      color: "white"
    },
  },
  navigationButton: {
    color: 'secondary.main',
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 400,
    px: 2,
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#e91e63',
    },
  }
};
