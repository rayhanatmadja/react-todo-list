import React,{useState} from "react";
import ToDoItem from "./TodoItem";
import Heading from "./Heading";
import Input from "./Input";

function App() {

    const [item, setItem] = useState("");
    const [unClickedItem, isItemClicked] = useState([])

    function changeHandler(event){
        const newValue = event.target.value 
        setItem(newValue);
    }
    function addItem(){
      isItemClicked((prevItem)=>{
        return[...prevItem, item]
      })
      setItem("")
    }
    function deleItem(id){
      isItemClicked((prevItem)=>{
        return prevItem.filter((item, index)=>{
          return index !== id
        })
      })
    }
  return (
    <div className="container">
        <Heading></Heading>
      <Input
        eventChange={changeHandler}
        value={item}
        eventClick={addItem}
      ></Input>
      <div>
        <ul>
          {unClickedItem.map((toDoItem, index)=>{ 
            return <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleItem}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
export {useState};
