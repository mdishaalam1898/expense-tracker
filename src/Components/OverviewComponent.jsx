import React from "react";
import styled from "styled-components";

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Container>
      <Balance>
        Balance <span>₹ {bal}</span>
      </Balance>

      <AddBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add"}
      </AddBtn>
    </Container>
  );
};

export default OverviewComponent;


// ---------- Styled Components ----------

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9fafc;
  padding: 20px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 25px;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Balance = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #222;
  letter-spacing: 0.5px;

  span {
    color: #2575fc; /* blue accent for rupee */
    font-weight: 800;
    margin-left: 6px;
  }
`;

const AddBtn = styled.button`
  background: linear-gradient(135deg, #ff6a00, #ee0979);
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(238, 9, 121, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 14px rgba(255, 106, 0, 0.4);
  }

  &:active {
    transform: scale(0.97);
  }
`;
