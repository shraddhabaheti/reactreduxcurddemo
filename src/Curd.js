import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './action/actionCreator';
const Curd = () => {
  const [input, setInput] = useState({
    data: '',
  }
 )
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list)
  const handleAddTodoCurd = (e) => {

    e.preventDefault()
    if (input?.id) {
      dispatch(editTodo(input))
      setInput({ data: "", id: "" })


    } else {
      dispatch(addTodo(input))
      setInput({ data: "" })

    }
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const editItem = ({ data ,id}) => {

    setInput({ 'data': data ,'id':id})
  
    //dispatch(editTodo(input))

  }

  console.log(input)
  //console.log(list)

  return (
    <div>
      <h1>Curd react redux</h1>
      <div>
        <form onSubmit={handleAddTodoCurd}>
          <input type="text" name="data" placeholder='Additem.....' value={input?.data || ''} onChange={handleChange} />
          <button type='submit'>Add</button>
          <button type="submit">Edit</button>
        </form>

      </div>
      <div>
        {
          list.map((elem) => {
            return (
              <div key={elem.id}>
               
                <h3>{elem.data.data}</h3>
                <button onClick={() => dispatch(deleteTodo(elem.id))}>delete</button>
                <button onClick={() => editItem(elem)}>edit</button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Curd
