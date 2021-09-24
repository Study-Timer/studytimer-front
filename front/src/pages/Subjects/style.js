import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  h1,
  h4 {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    text-align: start;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;