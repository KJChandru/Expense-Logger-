import React from 'react';
import { Box, Typography, CardContent, Card, styled } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 600px;
  padding: 20px;
  background-color: #ffffff; 
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
`;

const StyledCard = styled(Card)`
  flex: 1;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.grey[200]}; 
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); 
  }
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

const Amount = styled(Typography)`
  font-size: 24px;
`;

const IncomeAmount = styled(Amount)`
  color: ${({ theme }) => theme.palette.success.main}; 
`;

const ExpenseAmount = styled(Amount)`
  color: ${({ theme }) => theme.palette.error.main}; 
`;

const ExpenseCard = ({ transactions }) => {
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Title>Income</Title>
          <IncomeAmount>₹{income}</IncomeAmount>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Title>Expenses</Title>
          <ExpenseAmount>₹{expense}</ExpenseAmount>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default ExpenseCard;
