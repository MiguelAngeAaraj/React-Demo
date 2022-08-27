import React from 'react'

import {Card,CardContent,CardMedia,CardActions,Button,Paper,Typography,Divider} from '@mui/material'
import Carousel from 'react-multi-carousel'
import {Link} from 'react-router-dom'

import 'react-multi-carousel/lib/styles.css'

import './Caroussel.css'


const Caroussel = ({data,responsive}) => {
  return (
    <Carousel
    swipeable={true}
    itemClass="carousel-item"
    keyBoardControl={true}
    responsive={responsive}
    showDots={false}
    autoPlay={false}
    removeArrowOnDeviceType={["mobile"]}

    >
        {
        data.map((data,idx) => <CarousselCard
        data={data}
        key={idx}
        /> 
) }
    </Carousel>
  )
}



const CarousselCard = ({data}) => (

<Link
      to={`/exercise/${data.id}`}
      style={{
        textDecoration:'none',
        width:'400px',
        maxWidth:'100%'
      }}
      >
       <Paper
       elevation={4}
       sx={{
        borderTop:'8px solid #FF2625',
        transform:'scale(1)',
        transition:'transform 0.5s',
        width:'100%',
        maxWidth:'100%',
        height:{md:'550px',xs:'auto'}
       
       }}
       key={data.id}
       >
        <Card
        sx={{
         width:'100%',
         height:{md:'550px',xs:'550px'},
         display:'flex',
         justifyContent:'space-between',
         alignItems:'flex-start',
         flexDirection:'column'
        }}
        
        >
          <CardMedia
       
          component='img'
          loading='lazy'
          src={data.gifUrl}
          alt={data.name}

          />
          <Divider
          sx={{
            backgroundColor:'#FF2625',
            height:{lg:'1.5px',md:'1px',xs:'0.6px'}
          }}
          
          />
          <CardContent
          sx={{
            width:{md:'100%',xs:'40ch'}
          }}
          >
            <Typography
            sx={{
              fontWeight:'bold',
              fontSize:{lg:'20px',md:'19px',sx:'17px'},
              lineHeight:'1.3'
            }}
            variant='span'
            >{data.name}</Typography>
          </CardContent>
          <CardActions
          sx={{
            paddingBototm:'40px'
          }}
          
          >
            <Button
            variant='contained'
            sx={{
              cursor:'context-menu',
              color:'#fff',
              backgroundColor:'#FFA9A9',
              borderRadius:'12px',
              boxShadow:'none',
              '&:hover':{
                backgroundColor:'#FFA9A9',
                boxShadow:'none',
              }
            }}
            >{data.bodyPart}</Button>
            <Button
             sx={{
              cursor:'context-menu',
              color:'#fff',
              backgroundColor:'#FCC757',
              borderRadius:'12px',
              boxShadow:'none',
              '&:hover':{
                backgroundColor:'#FCC757',
                boxShadow:'none',
              }
            }}
            
            
            > {data.target} </Button>
          </CardActions>
        </Card>
   
        </Paper>
        </Link>

)


export default Caroussel