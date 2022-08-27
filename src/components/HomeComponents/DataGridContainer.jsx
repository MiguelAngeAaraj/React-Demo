import React from 'react'
import DataGrid from './DataGrid'

import {Box,Stack} from '@mui/material'
import { Fade } from 'react-awesome-reveal'

import Caroussel from './Caroussel'

const DataGridContainer = () => {
  return (
    <Box>
        <Stack
        gap={10}
        >
            {<Fade direction="up" triggerOnce={true}
            delay={1100}
            >
         
          <Caroussel/>
            </Fade>}
            <DataGrid/>
        </Stack>
    </Box>
  )
}

export default DataGridContainer