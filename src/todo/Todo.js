import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../action/actionCreator';

const Todo = () => {
  const [input, setInput] = useState('')
  const [item, setItem] = useState([]);
  const [toggleButton, setToggleButton] = useState(true);
  const [editdata, setEditData] = useState(null);
  //const dispatch = useDispatch();
 // console.log(input)
  const addItem = () => {
    if (!toggleButton) {
      let newlist = item.map((elem) => {
        if (elem.id === editdata) {
          elem.name = input

        }
        return elem
      })

       setItem(newlist)
      //dispatch(addTodo(newlist))
      setToggleButton(true)
      setEditData(null)
      setInput('')
    }
    else {
      const alldata = { id: new Date().getTime().toString(), name: input }
      setItem([...item, alldata])
      setInput('')

    }

  }
  const editItem = (value) => {
    
    setToggleButton(false)
    setInput(value.name)
    setEditData(value.id)

  }

  const deleteItem = (index) => {
    const updateItem = item.filter((elem) => {
      return index !== elem.id
    })
    setItem(updateItem)
  }
  return (
    <div>
      <h1>Todo app in curd </h1>
      <div>
        <input type="text" name='text' placeholder='AddItem....' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addItem}>{toggleButton ? "Add" : "edit"}</button>
        
        <div>
          {
            item.map((elem) => {
              return (
                <div key={elem.id}>
                  <h1>{elem.name}</h1>
                 
                  <button onClick={() => editItem(elem)}>edit</button>
                  <button onClick={() => deleteItem(elem.id)}>delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Todo
