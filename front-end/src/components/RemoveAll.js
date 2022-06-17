import React from 'react'
import { Button } from '@mui/material'
const RemoveAll = () => {


    //   to remove all items
    const removeAll = ({setInputList}) => {
        
        fetch('http://localhost:8080/removeItem')
        .then(res=>{
          return res.json();
        }) 
        .then(data=>{
         setInputList(data);
          //console.log(data);
        })
  
          
        }


  return (
    <>

         <div className="removeButton">            
          <Button  onClick={removeAll} variant="contained" color="error" size="large">
           Remove all
           </Button>

         
           </div> 
    </>
  )
}

export default RemoveAll
