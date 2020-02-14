import React from 'react'
import styled from "styled-components";

const StyledHeading = styled.h2`
  margin-top: 5em;
`;

const StyledTable = styled.table`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: auto auto;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #3f51b5;
    color: white;
    font-size: 1.4rem;
  }

  td {
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
  }

  button {
 
  background-color: #3f51b5;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(0,0,0,.2) 0 3px 1px -2px,rgba(0,0,0,.14) 0 2px 2px 0,rgba(0,0,0,.12) 0 1px 5px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: .02857em;
  line-height: 1.75;
  margin: 0;
  min-width: 64px;
  outline: 0;
  padding: 6px 16px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(.4,0,.2,1) 0ms, box-shadow 250ms cubic-bezier(.4,0,.2,1) 0ms, border 250ms cubic-bezier(.4,0,.2,1) 0ms;
  user-select: none;
  vertical-align: middle;
}

.delete {
  background-color: #f50057;
}
`

const Table = ({curState, handleDispatchFn, handleEdit, editState}) => {

    
  return (
    <>
      <StyledHeading>Books read in 2020</StyledHeading>
      <StyledTable>
          <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th />
            <th />
          </tr>
          </thead>
            <tbody>
              {curState.book.length > 0 ? (
                curState.book.map( book => (
                 <tr key={book.id}>
                  
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                

         
            

            <td>
              <button onClick={()=> handleEdit({id:book.id,title:book.title,author:book.author})} disabled = {editState} >Edit </button>
            </td>
            <td>
              <button className="delete" onClick={()=> handleDispatchFn('delete', book.id)}>Delete</button>
            </td>
          </tr>
               ))
               ) : (<tr>
                 <td colSpan={4}>No books yet!</td>
               </tr>)
                }
              
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
