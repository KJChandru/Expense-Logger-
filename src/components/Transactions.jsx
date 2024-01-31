import React from 'react';
import { Box, Typography, List, Divider, styled } from '@mui/material';
import Transaction1 from './Transaction1';

const Container = styled(Box)`
  margin-top: 20px;
  width: 95%;
  padding: 20px;
  background-color: #f5f5f5; 
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); 
`;

const Title = styled(Typography)`
  font-size: 24px;
  margin-bottom: 20px;
  color: #1a237e;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 20px;
`;

const Transactions = ({ transactions,setTransactions }) => {
  return (
    <Container>
      <Title variant="h5">Transaction History</Title>
      <StyledDivider />
      <List>
        {transactions.map((transaction) => (
          <Transaction1 key={transaction.id} transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
        ))}
      </List>
    </Container>
  );
};

export default Transactions;
