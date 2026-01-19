import React from 'react'
import {
  Pagination, Stack,
} from '@mui/material';

export default function CustomPagination({ totalCount, limit, page, onPageChange }) {
  const count = Math.ceil(totalCount / limit);

  if (count <= 0) return null;
  return (
    <Stack alignItems="center" sx={{ mt: 5 }}>
      <Pagination  color="primary" shape="rounded" 
        count={count} 
        page={page} 
        onChange={onPageChange}
        variant="outlined" 
      
      />
    </Stack>
  )
}
