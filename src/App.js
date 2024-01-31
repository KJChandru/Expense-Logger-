import React, { useState } from 'react';
import { Typography, styled, Box, Grid } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  font-size: 36px;
  color: #333; 
  
  margin-bottom: 20px;
`;

const Container = styled(Box)`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 65%;
  margin: auto; 
`;

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20 },
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -20 },
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);

  return (
    <Container>
      <Header varient="h1">Expense Logger</Header>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions}/>
          <NewTransaction setTransactions={setTransactions}/>
        </Grid>
        <Grid item xs={6}>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
