import styled from 'styled-components';

interface StyledTdProps {
  type?: string;
}

export const StyledTable = styled.table`
  width: 100%;
  & > thead,
  tbody tr:nth-child(even) {
    background: #eeeeee;
  }
  &,
  th,
  td,
  tr {
    border-collapse: collapse;
    text-align: left;
    vertical-align: middle;
  }
  th {
    height: 30px;
  }
`;

export const StyledTd = styled.td<StyledTdProps>`
  ${({ type }) => {
    if (type === 'Live Price') {
      return `color:#5DBE7E;font-weight: 700;`;
    } else if (type === 'Exchanged') {
      return `color:#6368DF;font-weight: 700;`;
    }
  }}
  height: 53px;
`;
