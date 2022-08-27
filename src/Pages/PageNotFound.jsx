import React from 'react'
import {Box} from '@mui/material'
import PageNotFound_404 from '../assets/images/404.png'
const PageNotFound = () => {
  
  return (
    <Box
    sx={{
      width:'100%',
      height:'400px',
      marginTop:'50px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:'50px'
    }}
    >
   <Box
   src={PageNotFound_404}
   alt="page not found"
   component='img'
   sx={{
   width:'500px',
   maxWidth:'90%',
   objectFit:{md:'cover',xs:'contain'},
   height:'100%',
   borderRadius:'23px'
   }}/>
   </Box>
  
  )
}

export default PageNotFound