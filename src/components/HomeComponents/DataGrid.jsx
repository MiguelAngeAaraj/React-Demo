import React, {useState,useRef} from 'react'
import {Box,Card, CardContent,CardMedia,Button,CardActions,Typography,Paper, Divider, Pagination} from '@mui/material'
import { Stack } from '@mui/system'
import {InitialGymAdapter, useGetDataQuery} from '../../Features/Api/SliceINjection'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Fade} from 'react-awesome-reveal'
import Loader from '../Loader'
import Error from '../Error'
const DataGrid = () => {
  const Themes = useSelector(state => state.Theme)
  const [PaginationValue,setPaginationValue] = useState(1)
  const StackRef = useRef(null)
  const {isSuccess,isError,error} = useGetDataQuery()
  return (
    isSuccess ? ( <Box
    ref={StackRef}
    >
      <Typography 
      sx={{
        marginBottom:'20px'
      }}
      variant='h3'
      >Showing Result</Typography>
     <Stack
      justifyContent='center'
      flexDirection='row'
      alignItems='center'
      rowGap={10}
      columnGap={20}
      flexWrap='wrap'
      >
        {
          InitialGymAdapter.AllData.filter(data => {
            if(Themes.Theme.toLowerCase() !== 'all'.toLowerCase()) {
              return data.bodyPart.toLowerCase() === Themes.Theme.toLowerCase() 
            }else {
              return true
            }
          })
          .slice(PaginationValue - 1,PaginationValue + 5).map((data,idx) => (
      <Fade
      direction={idx % 2 === 0 ? 'up' : 'down'}
      key={data.id}
      triggerOnce={true}
      cascade={true}
      >
      <Link
      to={`exercise/${data.id}`}
      style={{
        textDecoration:'none'
      }}
      >
       <Paper
       elevation={4}
       sx={{
        borderTop:'8px solid #FF2625',
        transform:'scale(1)',
        transition:'transform 0.5s',
        width:{lg:'400px',md:'300px',xs:'100%'},
        "&:hover": {
          transform:'scale(1.1)'
        }
       }}
       key={data.id}
       >
        <Card
        sx={{
          width:{lg:'400px',md:'300px',xs:'100%'}
        }}
        
        >
          <CardMedia
       
          component='img'
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
              lineHeight:'2'
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
        </Fade>
          ))
        
}
</Stack>
<Box
sx={{
  width:'100%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  margin:'50px 0',
}}

>
<Pagination 
sx={{

}}
count={Math.ceil(InitialGymAdapter.AllData.filter(data => {
  if(Themes.Theme.toLowerCase() !== 'all'.toLowerCase()) {
    return data.bodyPart.toLowerCase() === Themes.Theme.toLowerCase() 
  }else {
    return true
  }
}).length / 6)}
 defaultPage={1} boundaryCount={3}
 size='large'
 
 onChange={(_,value) =>{
  setPaginationValue(value)
  StackRef.current.scrollIntoView({behavior: "smooth",inline:'start',block:'start'})
}}
 />
</Box>
    </Box>
  ): isError ? (<Error error={error}/>) :(<Loader/>)
  )
  
}

export default DataGrid