import styled from "styled-components";

export const Card = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 45%;
  margin: 60px 0;
  border-radius: 25px;
  padding: 20px 60px;

  h1 {
    font: Poppins;
    font-style: normal;
    font-size: 30px;
    line-height: 46, 87px;
    margin-bottom: 10px;
    text-align: start;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButtons = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

export const CardItens = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;

export const CardItem = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  p {
    color: #b1aaaa;
    font-size: 12px;
    line-height: 23, 44px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  h2 {
    width: 99px;
    margin: 0;
    padding: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #000000;
  }
`;