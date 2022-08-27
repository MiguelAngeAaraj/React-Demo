import { Box, Typography } from '@mui/material'
import {Stack} from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
  <Box sx={{width:{lg:'600px',md:'500px',sm:'100%',xs:'100%' },
  marginLeft:{lg:'40px',md:'30px',xs:'0px',sm:'0px'},
           padding:{lg:'40px 30px',md:'20px 20px',xs:'4px 0'}}}>
<Stack flexDirection='row' alignItems='center'
       
       sx={{justifyContent:{lg:'none',xs:'space-around'}}}  >
    <Link to='/'>
    <Box sx={{width:{lg:'90px',md:'60px',xs:'30px'},
             objectFit:'cover',
             paddingRight:{lg:'40px',md:'30px',xs:'0px'}}} component='img' src={require('../assets/images/Logo.png')} />
    </Link>
    <Link to="/" className='LinkDesign'>
        <Typography sx={{fontSize:{lg:'29px',md:'27px',xs:'18px'}, 
                         }}>Home</Typography>
    </Link>
    <a href="#exercises" className='LinkDesign'>
        <Typography sx={{fontSize:{lg:'29px',md:'27px',xs:'18px'}
        }}>Exercises</Typography>
    </a>
</Stack>
  </Box>
  )
}

export default Navbar