import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import DataGridContainer from '../components/HomeComponents/DataGridContainer'
import IntroSection from '../components/HomeComponents/IntroSection'
import SearchItems from '../components/HomeComponents/SearchItems'

const Home = () => {
  return <Box sx={{
   paddingBottom:'20px'
  }}>
    <Stack flexDirection='column' sx={{gap:{lg:30,md:30,xs:30}}}>
      <IntroSection/>
      <SearchItems/>
      <DataGridContainer/>
    </Stack>
  </Box>
}

export default Home
