import React from 'react'
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






const Form = ({ handleChangeFn, bkDetails, handleDispatchFn }) => {
    const classes = useStyles();

    const fieldState = !(bkDetails.author && bkDetails.title) ? true : false

  
    

 

    return(
      <>
          <h1>Add Book</h1>
          <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Title"
              placeholder="Title"
              multiline
              rowsMax="4"
              value={bkDetails.title}
              onChange={(e) => handleChangeFn(e)}
              variant="outlined"
              name="title"
            />
            <TextField
              id="outlined-textarea"
              label="Author"
              placeholder="Author"
              multiline
              value={bkDetails.author}
              onChange={(e)=>handleChangeFn(e)}
              variant="outlined"
              name="author"
            />
        
          </div>
          <Button 
          onClick={()=> handleDispatchFn('add book')}
           variant="contained" 
           color="primary"
           disabled={fieldState}>
              Add Book
            </Button>
        </form>
    </>
    )

}


export default Form