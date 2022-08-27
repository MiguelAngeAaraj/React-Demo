import React,{useEffect} from 'react'
import {Box,Stack} from '@mui/material'
import {useParams,useNavigate} from 'react-router-dom'

import Details from '../components/ExerciseTypeComponents/Details'
import YoutubeVideos from '../components/ExerciseTypeComponents/YoutubeVideos'
import TargetMuscles from '../components/ExerciseTypeComponents/TargetMuscles'
import EquipmentsExercises from '../components/ExerciseTypeComponents/EquipmentsExercises'
import {  useGetExerciseQuery } from '../Features/Api/SliceINjection'
import Error from '../components/Error'
const ExerciseType = () => {
  const {id } = useParams()
 
  const Navigate = useNavigate()
  

  
  useEffect(() => {
    if(isNaN(id)) {
    return Navigate("/")
    }
   window.scrollTo(0,0)
   },[id,Navigate])
  
  const {isSuccess,isError,error} =  useGetExerciseQuery(id)
 
  return (
   isSuccess ? (
   <Box
    sx={{
    padding:'10px 0'
    }}
    
    >
    <Stack
    flexDirection='column'
    gap={10}

    >
    
      <Details
      
      isSuccess={isSuccess}/>
      <YoutubeVideos />
      <TargetMuscles/>
      <EquipmentsExercises/>
    </Stack>
    </Box>) :isError ?
     (<Error error={error}/>) 
    : ("")
      )
}

export default ExerciseType