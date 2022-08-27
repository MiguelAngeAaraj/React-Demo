import React from 'react'
import {InitialGymAdapter} from '../../Features/Api/SliceINjection'
import {Box, List, ListItem, ListItemText} from '@mui/material'
import '../HomeComponents/SearchItems.css'
import {useNavigate} from 'react-router-dom'

const DisplayList = ({DataChange}) => {
  const Navigate = useNavigate()
  return (
    <Box
   
    >
        <List
        className='ListItems'
       sx={{
        position:'absolute',
        width:'100%',
        height:'200px',
        overflowY:'scroll',
      paddingTop:'30px',
      zIndex:'1000',
      backgroundColor:'#fffafb'
       }}
       >
     {
        InitialGymAdapter.AllData.filter(data => data.name.startsWith(DataChange.toLowerCase())).map(data => (
            <ListItem
            button
            onClick={() =>Navigate(`/exercise/${data.id}`)}
            divider
            key={parseInt(data.id)}>
                <ListItemText
   
                    
             >
                <span className='ListItemReplace'>
                {data.name.substring(0,data.name.indexOf(DataChange.toLowerCase())  
                 + DataChange.length  )}
                </span>
             <span className='ListItem'>
            {data.name.substring(data.name.indexOf(DataChange.toLowerCase()) 
            + DataChange.length   ,data.name.length )}
            </span>
             </ListItemText>
            </ListItem>
        ))
    }
        </List>
    </Box>
  )
}

export default DisplayList