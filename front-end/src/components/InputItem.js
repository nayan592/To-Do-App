import React from 'react'

const InputItem = ({inputdata,toggleButton,setEditItemId,setInputData,setToggleButton,editItemId}) => {


     // add Item to the list

     const addToList = () => {
        if(!inputdata) alert("please fill the data");

        // if toggle is true then Edit Mode is on
        else if(inputdata && toggleButton)
        {
        
          const newUpdateItem={
            id:editItemId,
            name:inputdata
          }

          fetch('http://localhost:8080/updateItem',{
            method:'PUT',
            headers:{"Content-Type": "application/json"},
            body :JSON.stringify(newUpdateItem)
          }).then(()=>{
            // console.log(newItem);
            // console.log(inputdata);
          })
         
          setEditItemId(null);
          setInputData("");
          setToggleButton(false);
          
        }


        // hrere toggleButton is false so create mode is on
        else {
          
          const newItem={name:inputdata}
          fetch('http://localhost:8080/addItem',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body :JSON.stringify(newItem)
          }).then(()=>{
            console.log(newItem);
            console.log(inputdata);
          })
      
            setInputData("");
        }

        
        
      }

  return (
    <>
    
    <div className="addItem">
                    <input type="text"
                     placeholder="add Items here" 
                     className="form-control" 
                     value={inputdata}
                     onChange={(e)=>setInputData(e.target.value)}/>
                     
                     {/* using toogle button for edit */}
                    <i className='fa fa-plus add-btn'  onClick={addToList}></i>
                    
                    </div>
    </>
  )
}

export default InputItem
