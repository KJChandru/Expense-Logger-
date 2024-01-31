import React from 'react';
import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
  && {
    
    margin-top: 15px;
    background-color: #f9f9f9; 
    border-radius: 8px;
    padding: 13px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    transition: box-shadow 0.3s ease-in-out; 
  }

 
`;

const Transaction1 = ({ transaction,setTransactions,transactions}) => {

  const deleteTransaction=(id)=>{
    setTransactions(transactions.filter(transaction => transaction.id !==id))
     
  }

  return (
    <Detail>
      <ListItemIcon>
        <DeleteIcon onClick={()=> deleteTransaction(transaction.id)}></DeleteIcon>
      </ListItemIcon>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  );
};

export default Transaction1;
