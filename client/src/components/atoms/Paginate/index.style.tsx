import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-top: 0;
  padding: 0;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  li {
    height: 40px;
    width: 40px;
    margin: 0 5px 0 0;
  }
  li.previous {
    display: none;
  }
  li a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    vertical-align: middle;
    background-color: #000;
    border-color: transparent;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
