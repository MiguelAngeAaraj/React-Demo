import React from 'react'

import {Box,Typography,Stack} from '@mui/material'
import ErrorIcon from '../assets/images/ErrorIcon.png'
const Error = ({error}) => {
 
  return (
    <Box
    component='div'
    sx={{
        margin:'20px 0'
    }}
    >
    <Stack
    gap={5}
    flexDirection='column'
    alignItems='center'
    sx={{
        justifyContent:{xs:'flex-start',md:'center'}
    }}
    >
        <Stack
        sx={{
            flexDirection:{md:'row',xs:'column'},
            justifyContent:{md:'normal',xs:'center'},
            alignItems:'center',
            gap:{md:'20px',xs:'25px'}
        }}
        >
        <Box
        component='img'
        src={ErrorIcon}
        alt="error icon"
        sx={{
            width:'50px',
            height:'50px'
        }}    
        />
        <Typography
        variant='p'
        sx={{
            color:'red',
            fontSize:{md:'75px',xs:'30px'},
            fontWeight:'bold',

        }}
        >
            {error.status}
        </Typography>
        </Stack>
        <Typography
        variant='subtitle1'
        sx={{
            color:'',
            fontWeight:'700',
           lineHeight:'2',
           fontSize:{md:'25px',xs:'18px'}
        }}
        
        >
            {error.data.message}
        </Typography>
    </Stack>
    </Box>
  )
}

export default Error