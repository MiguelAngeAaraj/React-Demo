import React from 'react'

import {Paper,Box,Typography,Stack} from '@mui/material'

import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

import {useDispatch,useSelector} from 'react-redux'
import { useGetPartsQuery,InitialGymAdapter } from '../../Features/Api/SliceINjection'
import Loader from '../Loader'
import { onChangeTheme } from '../../Features/Slices/ThemeSlice'

import Error from '../Error'

import './Horizontal.css'


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };



const Caroussel = () => {
    const Themes = useSelector(state => state.Theme)
  const {isSuccess,isError,error} =   useGetPartsQuery()
    const Dispatch = useDispatch()
    const HandleClick = (id) => {
    const Data =  InitialGymAdapter.BodyParts.find((_,idx) => idx === id)
   Dispatch(onChangeTheme(Data))
 
    }

  return (
  isSuccess ? (<Carousel
swipeable={true}
showDots={false}
autoPlay={false}
responsive={responsive}
removeArrowOnDeviceType={["mobile"]}   
   >
    {InitialGymAdapter.BodyParts.map((data,idx) => <Card
     idx={idx}
     key={idx}
     data={data}
     Themes={Themes}
     onClicks={HandleClick}
    />)}

   </Carousel>) :isError ? (
   <Error error={error}/>
   ) :(<Loader/>)
  )
}







const Card = ({onClicks,data,idx,Themes}) => {
    return (
        <Paper
        elevation={2}
        key={idx}
        onClick={() => {
            onClicks(idx)
        }
        }
        sx={{
          padding:{lg:'50px 0',xs:'20px 0'},
        width:{lg:'300px',md:'300px',xs:'200px'},
        height:{lg:'200px',md:'200px',xs:'199px'},
        cursor:'pointer'
    }}
        style={{margin:'0 40px',
               borderTop:(Themes.Theme.toLowerCase() === data.toLowerCase()) 
               ? 
               "9px solid #FF2625" : ""}}
        >
        <Box
        className='HoverOver'
       
        m="0 100px"
        >
            <Stack
            flexDirection='column'
            gap={5}
           
           justifyContent='center'
            alignItems='center'
            >
                <Box
                sx={{
                    width:{lg:'70px',xs:'50px'},
                    display:'block'
                }}
                component='img'
                src={require('../../assets/icons/gym.png')}            
                
                />
                <Typography
                variant='p'
                sx={{
                    fontWeight:'bold',
                    letterSpacing:'1px'
                }}
                >{data}</Typography>
            </Stack>
        </Box>
        </Paper>
    )
    }




export default Caroussel