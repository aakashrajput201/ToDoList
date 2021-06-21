import React,{useState} from "react";
import TodoItem from "./TodoItem";

function App() {
  const[items,setItems]=useState([]);
  const[inputText,setInputText]=useState("");

  function handleChange(event){
    setInputText(event.target.value);
  }

  function handleSubmit(event){
    setItems((prevItems)=>{
     return [...prevItems,inputText];
    })
    setInputText("");
  }
  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter(
        (item,index)=>{
          return index !==id;
        }
      )
    });
  }
  return (
    <div className="container">
      <div className="heading">
      <h1>To-Do-List</h1>
      </div>
      <div className="form">
      <input onChange={handleChange} type="text" value={inputText}/>
      <button onClick={handleSubmit}><span>Add Item</span></button>
      </div>
    <div>
      <ul>
      {items.map((item,index)=>{
      return <TodoItem key={index} id={index} text={item} onChecked={deleteItem}/>
      })}
      </ul>
      </div>
    </div>
    
  );
}

export default App;
