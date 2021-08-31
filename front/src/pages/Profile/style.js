import styled from "styled-components";
import { FormGroup, Label } from "reactstrap";

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
    color: black;
    margin: 0;
    padding: 0;
    font-family: Poppins;
    text-align: start;
    font-size: 48px
  }
`;

export const StyledFormGroup = styled(FormGroup)`
  width: 100%;
  flex-grow: inherit;
  height: 50px;
  margin-top: 140px;
  margin-left: 68px;
`;

export const StyledLabel = styled(Label)`
  color: black;
  font-weight: bold;
  padding: 0;
  font-size: 36px;
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;
  `;

export const SubsectionContent = styled.span`
  color: grey;
`;

export const SubsectionTitle = styled.h2`
  color: black;
`;

export const SubsectionItem = styled.div`
  display: flex;
  text-align: start;
`;

// export const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   align-items: start;
//   margin-left: 38px;
// `;

export const Main = styled.main`
  justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SubsectionContainer = styled.div`
  display: block;
  right: 0px;
  `;







