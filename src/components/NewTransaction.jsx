import React, { useState } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #fff; 
    border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
`;

const InputField = styled(TextField)`
  width: 100%;
`;

const AddButton = styled(Button)`
  width: 100%;
  background-color: #2196f3;
  color: #fff; 
  &:hover {
    background-color: #1565c0;
  }
`;

const NewTransaction = ({ setTransactions }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };
    setTransactions((prevState) => [transaction, ...prevState]);
  };

  return (
    <Container>
      <Title variant="h5">New Transaction</Title>
      <InputField label="Enter Expense" onChange={(e) => setText(e.target.value)} />
      <InputField label="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
      <AddButton variant="contained" onClick={addTransaction}>
        Add Transaction
      </AddButton>
    </Container>
  );
};

export default NewTransaction;
