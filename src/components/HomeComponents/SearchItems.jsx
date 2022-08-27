import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import InputFieldComponent from './InputFieldComponent'
import '../HomeComponents/SearchItems.css'
import {Fade} from 'react-awesome-reveal'
const SearchItems = () => {
  return (
    <Fade
    direction='up'
    damping={0.5}
    fraction={0.5}
    cascade={true}
    triggerOnce={true}
    >
    <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}
    
    >
        <Stack gap={6}>
            <Typography className='Title2' 
            sx={{
                fontSize:{lg:'40px',xs:'30px'},
                fontWeight:'bold'
            }}
            variant='h2'
            >Awesome Exercises You Should Know</Typography>
            <InputFieldComponent/>
        </Stack>
    </Box>
    </Fade>
  )
}

export default SearchItems