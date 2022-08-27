import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import { Stack } from '@mui/system'
import '../HomeComponents/IntroSection.css'
import {Fade} from 'react-awesome-reveal'
const IntroSection = () => {
  return (
    <Box>
        <Stack flexDirection='row' justifyContent='space-evenly' alignItems='center'>
       <Fade triggerOnce={true}  direction='left' delay={1200} cascade={true} >
        <Stack gap='30px' sx={{marginTop:{lg:'0px',xs:'100px'},justifyContent:{lg:'none',xs:'flex-start'},
                              alignItems:{lg:'flex-start'},
                              marginLeft:{xs:'10px'}}}>
            <Typography
            sx={{
                color:'#FF2625',
                fontWeight:'bold',
                fontSize:{lg:'27px'},
                textAlign:{xs:'center'}
            }}
            variant='subtitle1'>Fitness Club</Typography>
            <Typography
            sx={{
               fontSize:{lg:'60px',xs:'30px'},
               fontWeight:'900'
            }}
            variant='h1'>Sweat, Smile And Repeat</Typography>
            <Typography
            sx={{
                
                fontWeight:'600',
                fontSize:{xs:'17px'}
            }}
            
            variant='h5'>Check out the most effective exercises personalized to you</Typography>
            <Box
            sx={{display:{xs:'flex'} ,justifyContent:{xs:'center'},alignItems:{xs:'center'} }}
            
            >
            <Button 
            sx={{
                backgroundColor:'rgb(255, 38, 37)',
                padding:{md:'17px 16px',xs:'10px 10px'},
                borderRadius:{lg:'10px',xs:'7px'},
                width:{md:'200px',xs:'150px'},
                color:'#fff',
                fontSize:{lg:'17px',xs:'12px'},
                "&.MuiButtonBase-root:hover": {
                    bgcolor: "rgb(255, 38, 37)"
                  }

            }}
            variant='contained'
            
            >Explore Exercise</Button>
            </Box>
        </Stack>
        </Fade>
        <Fade triggerOnce={true} direction='right' delay={1300} cascade={true}>
        <Box
            style={{position:'relative'}}
            
        >
        <Box
        sx={{
            display:{lg:'block',md:'block',xs:'none',sm:'none'},
           marginTop:{lg:'-140px',md:'0px'},
       width:{lg:'600px',md:'400px'},
            objectFit:'cover',
           
            
    }}

        component='img'
        src={require('../../assets/images/banner.png')}     
        alt='banner'   
        />
        <h1 className='BgContainer'>Exercise</h1>
        </Box>
        </Fade>
        </Stack>
    </Box>
  )
}

export default IntroSection