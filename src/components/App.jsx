import React,{useState} from "react";

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
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={item}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {unClickedItem.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
