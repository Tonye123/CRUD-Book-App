import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));






const EditForm = ({ editInfo, handleDispatchFn, handleEdit }) => {
    const classes = useStyles();

      const [input,setInput ] = useState({ id:editInfo.id, title:editInfo.title,author:editInfo.author})

      const handleChange = (e) => {
          setInput({
            ...input,
            [e.target.name] : e.target.value,
            
          })
          

          
      }

     


    

 

    return(
      <>
          <h1>Update Book</h1>
          <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Title"
              placeholder="Title"
              multiline
              rowsMax="4"
              
              defaultValue = {editInfo.title}
              onChange={handleChange}
              variant="outlined"
              name="title"
            />
            <TextField
              id="outlined-textarea"
              label="Author"
              placeholder="Author"
              multiline
              
              defaultValue = {editInfo.author}
              onChange={handleChange}
              variant="outlined"
              name="author"
            />
        
          </div>
          <Button onClick={()=> handleDispatchFn('update',input)} variant="contained" color="primary">
              Update Book
            </Button>
             <div className="cancelBtn">
            <Button onClick={handleEdit}  variant="contained" color="secondary" >
              Cancel
            </Button>
            </div>
        </form>
    </>
    )

}


export default EditForm