import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  height: 38px;
  flex: ${(props) => props.flex};
  margin-right: 1%;
  font-size: 1em;
  border: 1px solid #bbb6b6;
  padding-left: 10px;
`;

export default Input;
