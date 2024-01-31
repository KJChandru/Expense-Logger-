import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const BalanceContainer = styled(Box)`
  background-color: #f3f3f3; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
`;

const BalanceText = styled(Typography)`
  font-size: 35px;
  
  margin-bottom: 20px;
  color: Black; 
`;

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <BalanceContainer>
      <BalanceText>₹ {total}</BalanceText>
     
    </BalanceContainer>
  );
};

export default Balance;
