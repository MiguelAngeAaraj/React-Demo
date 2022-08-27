import React from 'react'


import {Box,Stack,Typography,Button} from '@mui/material'

import { InitialGymAdapter } from '../../Features/Api/SliceINjection'



import Loader from '../Loader'

const Details = ({isSuccess}) => {
   
  return (
 isSuccess ? ( <Box>
    <Stack
        sx={{
            justifyContent:{md:'none',sm:'center'},
            flexDirection:{md:'row',xs:'column'}
        }}
        alignItems='center'
        gap={10}
        >
            <Box
            component='img'
            loading='lazy'
            sx={{
                height:{md:'600px',xs:'auto'},
                borderRadius:'12px',
                width:{md:'auto',xs:'100%'},
                objectFit:'cover'
            }}
            src={InitialGymAdapter.Data.gifUrl}
            />

<Box
component='div'
>
    <Stack
    flexDirection='column'
    justifyContent='flex-start'
    alignItems='flex-start'
    rowGap={5}
    >
    <Typography
    variant='h2'
    sx={{
        fontWeight:'bold',
        fontSize:{md:'60px',xs:'30px'},
        textAlign:{md:'left',xs:'center'},
        width:{md:'auto',xs:'100%'}
    }}
    >{InitialGymAdapter.Data.name}</Typography>
    <Typography
    variant='p'
    sx={{
        fontSize:{lg:'22px',md:'19px',xs:'16px'},
        lineHeight:'2',
        fontWeight:'800'
    }}
    >
    Exercises keep you strong.
    <span style={{ textTransform: 'capitalize' }}>{InitialGymAdapter.Data.name}</span> bup is one
          of the best <br /> exercises to target your {InitialGymAdapter.Data.target}. It will help you improve your{' '}
          <br /> mood and gain energy.
    </Typography>
    <Stack
    flexDirection='column'
    rowGap={6}
    width='100%'
    >
       {
         
        InitialGymAdapter.Data.DetailsIcons.map(({Icon,name},idx) => (
            <Box
            style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'flex-start',
                width:'100%',
                
            }}
            key={idx}
            component='div'
            >
            <Box
            component='div'
          
            >
             <Button
             variant='contained'
             sx={{
                borderRadius:'50%',
                backgroundColor:'#FFF2DB',
                boxShadow:'none',
                '&:hover' : {
                    backgroundColor:'rgba(25, 118, 210, 0.04)',
                    boxShadow:'none'
                }
                
             }}
             >
                 <Box
                 component='img'
                 sx={{
                    padding:{md:'10px 10px',xs:'5px 5px'}
                 }}
                 src={Icon}
                 />
             </Button>
             </Box>
             <Typography
             variant='p'
             sx={{
                fontSize:{lg:'30px',md:'25px',xs:'20px'},
                fontWeight:'600',
                textTransform:'capitalize',
                letterSpacing:'4px',
                marginLeft:'40px'
             }}
             >
                 {name}
             </Typography>
            
            
         </Box>
        ))
       }

    </Stack>

</Stack>
</Box>
  </Stack>
    </Box>
 ) : (
<Loader/>
)
   
  )
}

export default Details