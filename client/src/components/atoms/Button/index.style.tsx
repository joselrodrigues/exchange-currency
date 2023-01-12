import styled from 'styled-components';

export const BaseButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 84px;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: opacity 0.1s ease-out;
  &:active {
    opacity: 0.7;
  }
`;
