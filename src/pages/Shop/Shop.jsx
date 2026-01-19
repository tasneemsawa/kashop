import React, { useState, useMemo } from 'react';
import {
  Box, Grid, Typography, TextField, MenuItem, Select,
  Slider, IconButton, Stack, Divider, Paper, Container, CircularProgress
} from '@mui/material';
import { Search, Add, GridView, List } from '@mui/icons-material';
import ProductGridCard from '../../components/ProductGridCard/ProductGridCard';
import ProductListCard from '../../components/ProductListCard/ProductListCard';
import CustomPagination from '../../components/Pagination/Pagination';
import { Styles } from './Styles';
import { useProducts } from '../../Hooks/useProducts';
import { useTranslation } from 'react-i18next';
import { useCategories } from '../../Hooks/useCategories';
import EmptyShop from '../../components/EmptyShop/EmptyShop';

const initialProducts = [
  { id: 1, name: "Waterproof Mascara", price: 187, rating: 4, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/80/20/03/802003da540474e882c6211d28cf1d45.jpg" },
  { id: 2, name: "Dead Sea Bath Salts", price: 217, rating: 3, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/15/07/b5/1507b519f1976dd3090ae886fe67f0f7.jpg" },
  { id: 3, name: "Xiaomi", price: 171, rating: 5, category: "Watches", image: "https://i.pinimg.com/736x/86/6d/cf/866dcff7520d465f3dcd6635c82380ea.jpg" },
  { id: 4, name: "Kossil Watch Brown", price: 117, rating: 4, category: "Watches", image: "https://i.pinimg.com/736x/a8/e4/76/a8e4762d2a85f820df68722b1376a02c.jpg" },
];

const Shop = () => {
  const { t } = useTranslation();

  const [view, setView] = useState("grid");
  const [searchProduct, setSearchProduct] = useState('');
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const limit = 9;
  const getSortParams = (sortBy) => {
    switch (sortBy) {
      case 'alphaZ': 
        return { sortBy: 'name', ascending: false };
      case 'alpha': 
        return { sortBy: 'name', ascending: true };
      case 'price-low': 
        return { sortBy: 'price', ascending: true };
      case 'price-high': 
        return { sortBy: 'price', ascending: false };
      case 'topRated': 
        return { sortBy: 'rate', ascending: false };
        case 'lessRated': 
        return { sortBy: 'rate', ascending: true };
      default:
        return { sortBy: 'name', ascending: true };
    }
  };

  const [sortBy, setSortBy] = useState('');
  const { isError:isErrorCategories, isLoading:isLoadingCategories, data:categories } = useCategories()

  const { sortBy: sortField, ascending: isAsc } = getSortParams(sortBy);
  let { isError, isLoading, data } = useProducts({
    search:searchProduct ||null,
   page,categoryId,
   minPrice: priceRange[0] ,maxPrice:priceRange[1],
   ascending:isAsc,
   sortBy:sortField,
   limit
  })


  // let filteredProducts = useMemo(() => {
  //   let result = data.filter(p =>
  //     p.name.toLowerCase().includes(searchProduct.toLowerCase()) &&
  //     p.price >= priceRange[0] && p.price <= priceRange[1]
  //   );
  //   if (sortBy === ' ') result.sort((a, b) => a.price - b.price);
  //   if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
  //   if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
  //   if (sortBy === 'alpha') result.sort((a, b) => a.name.localeCompare(b.name));
  //   if (sortBy === 'alphaZ') result.sort((a, b) => b.name.localeCompare(a.name));

  //   return result;
  // }, [searchProduct, sortBy, priceRange]);



  if(isLoading ||isLoadingCategories) return <CircularProgress></CircularProgress>

  if(isError) return <Typography>error</Typography>

  return (
    <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
      <Container maxWidth="lg">
        {/* Top Bar */}
        <Paper elevation={0} sx={Styles.topParPaper}>

          <Box>
            <Typography variant="body1" sx={Styles.searchText1}>
              {t("Searching for")} “ {searchProduct || 'all'} ”
            </Typography>
            <Typography variant="body1" sx={Styles.searchNumber}>
              {data.response.data.length}{t("results found")} 
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography color="muted.main" sx={{ fontSize: "14px", fontWeight: 500,marginLeft:"1px" }}>{t("Sort by")} :</Typography>
            <Select
              value={sortBy}
              onChange={(e) =>{ 
                setPage(1)
                setSortBy(e.target.value)}}
              size="small"
              sx={{ minWidth: 150, bgcolor: 'white' }}
            >
              <MenuItem value=" " ></MenuItem>
              <MenuItem value="price-low">{t("Price: Low to High")}</MenuItem>
              <MenuItem value="price-high">{t("Price: High to Low")}</MenuItem>
              <MenuItem value="alpha">{t("Alphabetical (A-Z)")}</MenuItem>
              <MenuItem value="alphaZ">{t("Alphabetical (Z-A)")}</MenuItem>
              <MenuItem value="topRated">{t("Top Rated")}</MenuItem>
              <MenuItem value="lessRated">{t("Lowest Rated")}</MenuItem>

            </Select>
            <IconButton size="small" onClick={() => setView("grid")}><GridView color={view == "grid" ? "primary" : "secondary"} /></IconButton>
            <IconButton size="small" onClick={() => setView("list")}><List color={view == "list" ? "primary" : "secondary"} /></IconButton>
          </Stack>
        </Paper>

        <Grid container spacing={2} >
          {/* Sidebar*/}
          <Grid size={{ xs: 12, sm: 4, md: 3, lg: 3 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: '8px' }}>

              <Typography gutterBottom sx={Styles.searchText}>{t("Search by Name")}</Typography>
              <TextField
                fullWidth
                placeholder={t("Search product...")}
                value={searchProduct}
                onChange={(e) =>{ 
                  setPage(1)
                  setSearchProduct(e.target.value)}}
                InputProps={{
                  startAdornment: <Search sx={{ color: 'muted', mr: 1 }} />
                }}
                sx={Styles.sreachInput}
              />
              <Divider sx={{ my: 3 }} />

              <Typography 
              gutterBottom sx={Styles.categoriesTitle}>{t("Categories")}</Typography>
              {categories.response.map(cat => (
                <Typography
                onClick={()=>{
                  setPage(1)
                  setCategoryId(cat.id)}}
                key={cat.id} sx={Styles.categoriesName}>{cat.name}</Typography>
              ))}

              <Divider sx={{ my: 3 }} />

              <Typography gutterBottom sx={Styles.priceRangeTitle}>{t("Price Range")}</Typography>
              <Box sx={{ px: 1 }}>
                <Slider
                  value={priceRange}
                  onChange={(e, newValue) =>{
                    setPage(1)
                     setPriceRange(newValue)}}
                  valueLabelDisplay="auto"
                  min={0}
                  max={2000}
                  sx={{ color: '#E94560' }}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">${priceRange[0]}</Typography>
                  <Typography variant="caption">${priceRange[1]}</Typography>
                </Box>
              </Box>


            </Paper>
          </Grid>

          {/* Product Grid */}
          <Grid size={{ xs: 12, sm: 8, md: 9, lg: 9 }}>
            <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
              {data?.response?.data.length==0?
              
              <EmptyShop onReset={()=>{
                setSearchProduct("")
                setPage(1)
                setCategoryId(null)
                setPriceRange([0, 2000])
                setSortBy("")
              }}/>
              
              :data.response.data.map((product) => (
                view == "grid" ?
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={product.id}>
                    <ProductGridCard product={product} />
                  </Grid> :
                  <Grid size={{ xs: 12 }} key={product.id}>
                    <ProductListCard product={product} />
                  </Grid>
              ))}

            </Grid>

            {/* Pagination */}
            <CustomPagination
            totalCount={data?.response?.totalCount || 0
              }
             limit={limit}
              page={page}
              onPageChange={(event, value) => {
              setPage(value);
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            
            
            
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Shop;