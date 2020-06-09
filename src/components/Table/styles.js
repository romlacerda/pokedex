import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  background-color: ${(props) => (props.variant === 'inversed' ? '#e6e6e6' : '#FFF')};
  width: 100%;
  
  & th {
    color: #504f4f;
  }

  & tr > td:last-child {
    text-align: center;
  }

  & th, td {
    padding: 10px;
    border: ${(props) => (props.variant === 'inversed' ? '1px solid #FFF' : '1px solid gray')};
  }

  & td {
    color: #8e8e8e;
  }
`;

export default Table;
