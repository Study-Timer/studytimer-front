import styled from "styled-components";

export const Card = styled.div`
  background: #f6f6f6;
  display: flex;
  justify-content: start;
  width: 100%;
  border-radius: 25px;
  padding: 20px 60px;
  align-items: center;

  h1 {
    font: Poppins;
    font-style: normal;
    font-size: 30px;
    line-height: 46, 87px;
    text-align: start;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  gap: 20px;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
`;

export const TimerButton = styled.button`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  width: auto;
  color: white;
  border-radius: 30px;
  border: none;
  height: 40px;
  width: 130px;
  text-transform: uppercase;
  font-weight: bold;
`;