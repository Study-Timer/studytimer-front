import styled from "styled-components";
import { Button} from "reactstrap";

export const StyledButton = styled(Button)`
  margin-top: 15px;
  border-radius: 50px;
  color: #fff;
  border: none;
  text-align: center;
  background-color: black;
  width: ${props => props.width ? props.width : "50px"};
  padding: 12px;
  cursor: pointer;
`;