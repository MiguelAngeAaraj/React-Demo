import React from 'react'
import { InitialGymAdapter, useGetYoutubeVideosQuery } from '../../Features/Api/SliceINjection'
import Loader from '../Loader'
import {Box,Card,Typography,CardMedia,CardContent} from '@mui/material'
import { Stack } from '@mui/system'

const YoutubeVideos = () => {

  const {isSuccess} = useGetYoutubeVideosQuery(InitialGymAdapter.Data.name)

  return (
    <Box>
      {isSuccess ? (
        
        <Stack
         flexDirection='column'
         sx={{
          gap:{lg:20,xs:3}
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
          Watch <span
          style={{color:'rgb(255, 38, 37)'}}
          >{InitialGymAdapter.Data.name}</span> exercise videos
          </Typography>

          <Box>
            <Stack
            flexDirection='row'
            gap={15}
            flexWrap='wrap'
            alignItems='center'
            sx={{
              justifyContent:{md:'space-evenly',xs:'center'},
              width:{md:'auto',xs:'100%'}
            }}
            >
            {
            InitialGymAdapter.YoutubeVideo.contents.slice(0,3).map((VideoContainer) => {
              const {thumbnails,title,videoId,channelName} = VideoContainer.video  
              return (
                <Box
                component='a'
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target='_blank'
                sx={{
                  textDecoration:'none',
                  width:{md:'auto',sm:'70%',xs:'100%'}
                }}
                
                >
                <Card
                sx={{
                height:'400px',
                  borderTopLeftRadius:'20px',
                }}
                >
                  <CardMedia
                  loading='lazy'
                  component='img'
                  sx={{
                   height:'250px',
                   objectFit:{md:'cover',xs:'contain'},
                    borderTopLeftRadius:'20px'
                  }}
                  src={thumbnails[0].url ?? thumbnails[1].url}

                  />
                  <CardContent
                  sx={{
                    padding:'10px 0',
                    fontWeight:'bold',
                    fontSize:{md:'17px',xs:'15px'},
                    textAlign:{md:'left',sm:'center',xs:'center'}
                }}
                  >
                    <Typography
                    variant='p'
                    sx={{
                      display:'block',
                      width:{md:'40ch',xs:'auto'},
                      lineHeight:'30px'
                    }}
                    
                    >
                      {title}
                    </Typography>
                    <Typography
                    variant='p'
                    sx={{
                      marginTop:'20px',
                      display:'block',
                      color:'rgb(255, 38, 37)'
                    }}
                    >
                      {channelName}
                    </Typography>
                  </CardContent>
                </Card>
                </Box>
              )
            })

            }
            </Stack>
            </Box>

        </Stack>
      )  : (<Loader/>)}
    </Box>
  )
}

export default YoutubeVideos