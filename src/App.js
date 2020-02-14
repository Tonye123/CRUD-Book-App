import React, {useState, useReducer} from 'react';
import Form from './components/Form'
import Table from './components/Table'
import EditForm from './components/EditForm'


function reducer(state, action) {
  switch (action.type) {
   
    case "add book":
      const newBook = [...state.book, action.payload]
      
      return  { 
                book: newBook }
    case "update":
      const filteredArrayEdit = state.book.filter(b => b.id !== action.payload.id)
      const newBooksArray = [ ...filteredArrayEdit, action.payload].sort(function(a,b){ return a.id - b.id})
      return { book: newBooksArray};
    case "delete":
      const filteredArray = state.book.filter(b => b.id !== action.payload)
      return { book: filteredArray}
    default:
      return state;
  }
}

const initialState = { book:[

]
    
} 

function App() {
  const [state, dispatch] = useReducer(reducer, initialState );
  const [bookDetails, setDetails] = useState({id:null, title:'',author:'' });
  const [editInfo,setEdit] = useState({ boolValue: false,
                                    details:{id:null,
                                           title: '',
                                           author: ''}  
                                          })


  const bookId = state.book.length + 1

  const handleChange = event => {
    setDetails({
      ...bookDetails,
       [event.target.name]: event.target.value,
      id: bookId });

  }

  const handleEdit = (editDetails) => {
    setEdit({
      boolValue:!editInfo.boolValue,
      details: {
        id: editDetails.id,
        title: editDetails.title,
        author: editDetails.author

      }
    })
    
  }
    
  const handleDispatch = (typeName,payloadInfo=bookDetails) => {

      if(typeName === 'add book') {

      dispatch({type:typeName, payload: bookDetails})
   
      } else {
        dispatch({type:typeName, payload: payloadInfo})
      }
      setDetails({id:null,title:'',author:''})
      setEdit({boolValue: false})
      
  }
  
  return (
  
    <div className="app">
      {editInfo.boolValue && state.book.length > 0 ?  <EditForm handleEdit={handleEdit} editInfo = {editInfo.details}  handleChangeFn={handleChange} handleDispatchFn={handleDispatch}/>
       :  <Form  handleChangeFn ={handleChange} bkDetails = {bookDetails} handleDispatchFn={handleDispatch}  />}  
       
        <Table curState = {state} handleDispatchFn={handleDispatch} handleEdit={handleEdit} editState = {editInfo.boolValue} />
    </div>
  );
}

export default App;
