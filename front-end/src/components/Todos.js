import React,{useEffect, useState} from 'react'
import {Typography} from '@mui/material'

import RemoveAll from './RemoveAll';
import ShowItems from './ShowItems';
import InputItem from './InputItem';





const Todos = () => {
    const[inputdata,setInputData]=useState("");
    const[inputList,setInputList]=useState([]);
    const[editItemId,setEditItemId]=useState("");
    const[toggleButton,setToggleButton]=useState(false);

 


    useEffect(()=>{
      fetch('http://localhost:8080/showAllItem')
      .then(res=>{
        return res.json();
      }) 
      .then(data=>{
       setInputList(data);
        //console.log(data);
      })

    },);

      

    
  return (
    <>
          <div className="main-div">
           
            <div className="child-div">

                      {/* title of the project */}
                   <div className="title">
                   <Typography  variant="h3">
                     TO DO LIST
                    </Typography>
                   </div>

                   {/* taking input form user */}
                   <InputItem   
                   inputdata={inputdata}
                    toggleButton={toggleButton} 
                     setEditItemId={setEditItemId}
                      setInputData={setInputData} 
                      setToggleButton={setToggleButton}
                       editItemId={editItemId}/> 


                      {/* showign items in loop */}
                    <ShowItems   
                    setInputData={setInputData}
                     setEditItemId={setEditItemId} 
                     setToggleButton={setToggleButton} 
                     inputList={inputList}/>


                    {/* remove all items */}
                      <RemoveAll  
                      setInputList={setInputList}/>
                


            </div>
            
            </div>    
    </>
  )
}

export default Todos



