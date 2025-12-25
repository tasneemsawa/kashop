import React from 'react'
import {
  Pagination, Stack,
} from '@mui/material';

export default function CustomPagination() {
  return (
    <Stack alignItems="center" sx={{ mt: 5 }}>
      <Pagination count={10} color="primary" shape="rounded" />
    </Stack>
  )
}
