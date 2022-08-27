import React from 'react'
import {Box,Stack, Typography} from '@mui/material'

const Footer = () => {
  return (
   
    
    <Box
    sx={{
        backgroundColor:'#FFFAFB'
    }}
    >
        <Stack
        gap={6}
        flexDirection='column'
        justifyContent='center' 
        alignItems='center'

        >
            <Box
            component='img'
            alt='strong Gym'
            src={require('../../assets/images/Logo-1.png')}
            ></Box>
            <Typography
            variant='h2'
            sx={{
                fontSize:{md:'30px',xs:'20px'}
            }}
            >Made by Miguel Ange</Typography>
        </Stack>
    </Box>

  )
}

export default Footer