import React from 'react'

const ShowItems = ({setInputData,setEditItemId,setToggleButton,inputList}) => {



    // to delete item form list
    const deleteToList = (id) => {
        

       
        fetch('http://localhost:8080/deleteItem/'+id,{
            method:'DELETE',
            
          }).then(()=>{
            console.log("ietem delete successfully");
            
          })
      
            setInputData("");
      }


  



      //  edit one item
      const editItem = (editId) => {

        const newEditItem=inputList.find((currEle)=>{
          return currEle.id === editId;

          

        })
        setEditItemId(editId);
        // console.log(editItemId);
        setInputData(newEditItem.name);
        setToggleButton(true);
        
        
      }
  return (
    <>

<div className="showItems">

{inputList.map((currEle)=>{
return (
    <div className="eachItem" key={currEle.id}>
      <h3>{currEle.name}</h3>
      <div className="todo-btn">

      <i className='far fa-edit add-btn' onClick={()=>editItem(currEle.id)}></i>
      <i className='far fa-trash-alt add-btn' onClick={()=>deleteToList(currEle.id)}></i>

      </div>
</div>
)
})}


</div>
    </>
  )
}

export default ShowItems
