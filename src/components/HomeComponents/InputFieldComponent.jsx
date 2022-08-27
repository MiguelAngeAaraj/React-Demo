import { Box } from '@mui/material'
import React,{useState} from 'react'
import '../HomeComponents/SearchItems.css'
import DisplayList from './DisplayList'

const InputFieldComponent = () => {
  const [DataChange,setDataChange] = useState('')
  return (
   <Box
   className='BoxContainerInput'
   component='div'
   sx={{
    width:'90%',
   
    marginLeft:{xs:'10px'},
    position:'relative',
   
  
  }}
   >
    <Box 
    sx={{
      marginTop:'30px',
      position:'relative',
    }}
    >
      <input type="Search" 
      value={DataChange}
      onChange={(Data) => setDataChange(Data.target.value)}
      placeholder='Search Exercises'
      className='InputField' />
      <label className='LabelInputFloat' >Search Exercises</label>
      <span className='BorderSpan'></span>
    </Box>
    
    {DataChange ? <DisplayList DataChange={DataChange}/> : ("")}
   </Box>
  )
}

export default InputFieldComponent