import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-bottom-right-radius: 20px;
  height: 100vh;
`;

export const UserImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 50px 20px;
  font-family: Poppins;
  font-weight: 50;
  font-size: 23px;
`;

export const UserImage = styled.img`
  border-radius: 20%;
  width: 90px;
  height: 90px;
`;

export const UserOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const UserOption = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  font-family: Poppins;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  border-left: ${(props) =>
    props.active === true ? "3px solid black" : "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
