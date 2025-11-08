import React from "react";
import styled from "styled-components";

const TransactionItem = ({ transaction, removeTransactions }) => {
  return (
    <ItemContainer>
      <Detail>
        <Text>{transaction.details}</Text>
        <Amount $isExpense={transaction.transType === "expense"}>
          ₹ {transaction.amount}
        </Amount>
      </Detail>
      <DeleteBtn onClick={() => removeTransactions(transaction.id)}>❌</DeleteBtn>
    </ItemContainer>
  );
};

export default TransactionItem;

// ---------- Styled Components ----------
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const Amount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ $isExpense }) => ($isExpense ? "red" : "green")};
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
