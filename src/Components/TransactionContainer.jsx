import React, { useEffect, useState } from "react";
import TransactionItem from "./TrnasactionItem";
import styled from "styled-components";

const TransactionContainer = ({ transactions, removeTransactions }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const filterData = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter((item) =>
      item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filterData(searchInput);
  }, [transactions, searchInput]);

  return (
    <Container>
      <Heading>Transactions</Heading>

      <SearchInput
      id="input"
        type="text"
        placeholder="Search here..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <TransactionList>
        {filteredTransactions.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction} 
              removeTransactions={removeTransactions}
            />
          ))
        ) : (
          <p>No transactions found</p>
        )}
      </TransactionList>
    </Container>
  );
};

export default TransactionContainer;

// ---------- Styled Components ----------

const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 25px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  margin-top: 25px;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 20px;
  border-left: 4px solid #2575fc;
  padding-left: 10px;
  letter-spacing: 0.3px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  outline: none;
  margin-bottom: 25px;
  background: #f9fafb;
  transition: all 0.25s ease;

  &:focus {
    border-color: #2575fc;
    background: #ffffff;
    box-shadow: 0 0 6px rgba(37, 117, 252, 0.2);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 380px;
  overflow-y: auto;
  padding-right: 5px;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8;
  }
`;

