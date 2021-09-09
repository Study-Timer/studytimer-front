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

export const Body = styled.div`
  margin-top: 120px;
`;

export const ProfileSubsection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

export const SubsectionTitle = styled.div`
  display: flex;
  width: 220px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubsectionContent = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: space-between;

  span {
    color: #B1AAAA;
    font-style: normal;
    font-size: 24px;
    line-height: 31px;
  }
`;