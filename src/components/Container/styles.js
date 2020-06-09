import styled from 'styled-components';

const Container = styled.div`
  margin: 0 5%;
  display: flex;
  flex-direction: ${(props) => (props.flexD === 'c' ? 'column' : 'row')}
`;

export default Container;
