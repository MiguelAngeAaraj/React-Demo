import React from 'react'
import {Box,Typography,Stack} from '@mui/material'
import Loader from '../Loader'
import { InitialGymAdapter, useGetTargetMuscleQuery } from '../../Features/Api/SliceINjection'
import Caroussel from './Caroussel'

const responsive = {
  desktop: {
    breakpoint: { max: 3200, min: 1300 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 1200 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1200, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TargetMuscles = () => {

  const {isSuccess} = useGetTargetMuscleQuery(InitialGymAdapter.Data.target)
  return (
    isSuccess ?(
    <Stack
    flexDirection='column'
   sx={{
    gap:{md:20,xs:4}
   }}
   >
      <Typography
          variant='h2'
          sx={{
            fontSize:{lg:'50px',sm:'18px',xs:'18px'},
            fontWeight:'bold',
            textAlign:{md:'left',sm:'center',xs:'center'}
          }}
          >
          Similar <span
          style={{color:'rgb(255, 38, 37)'}}
          >Target Muscle</span> exercises 
          </Typography>
<Box>
  <Caroussel
  data={InitialGymAdapter.TargetMuscles.slice(0,30)}
  responsive={responsive}
  />
</Box>
    </Stack>) :(<Loader/>)
  )
}

export default TargetMuscles