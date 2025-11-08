import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import AddTransaction from "./AddTransaction";
import TransactionContainer from "./TransactionContainer";

const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  

  const AddTransactions = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction]; // ✅ FIXED
    setTransactions(updatedTransactions);
  };

  const removeTransactions = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((item) => {
      if (item.transType === "expense") {
        exp += item.amount;
      } else {
        inc += item.amount;
      }
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <Container>
      <Heading>Expense Tracker</Heading>

      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionContainer
        transactions={transactions}
        removeTransactions={removeTransactions}
      />
    </Container>
  );
};

export default Tracker;

// ---------- Styled ----------
const Container = styled.div`
  width: 400px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  text-align: center;
`;
