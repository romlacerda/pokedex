import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  height: 42px;
  background-color: red;
  color: white;
  border: 0;
  flex: ${(props) => props.flex};
  cursor: pointer;
`;

export default Button;
