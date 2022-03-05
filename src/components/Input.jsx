import React from 'react';

function Input(props){
    return <div className="form">
    <input onChange={props.eventChange} type="text" value={props.value}/>
    <button onClick={props.eventClick}>
      <span>Add</span>
    </button>
  </div>
}

export default Input;