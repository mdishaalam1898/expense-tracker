import React, { useState } from "react";
import styled from "styled-components";


const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");

  const AddTransactionData = () => {
    const newTransaction = {
      id: Date.now(),
      details,
      amount: Number(amount),
      transType,
    };

    AddTransactions(newTransaction);
    setToggle(false);
  };

  return (
    <Container>
      <Input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Enter Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <RadioContainer>
        <RadioBttn>
          <Input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="expense">Expense</Label>
        </RadioBttn>

        <RadioBttn>
          <Input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="income">Income</Label>
        </RadioBttn>
      </RadioContainer>

      <SubmitBtn onClick={AddTransactionData}>Add Transaction</SubmitBtn>
    </Container>
  );
};

export default AddTransaction;

// ---------- Styled ----------

const Container = styled.div`
  text-align: center;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 25px;
`;
const RadioContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline:none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #000;
`;
const RadioBttn = styled(RadioContainer)`
margin: 10px 20px 10px 0;
`;
const Label = styled.label`
margin-left: 10px;
cursor:pointer;
`;
const SubmitBtn = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 40px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 15px rgba(37, 117, 252, 0.4);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

