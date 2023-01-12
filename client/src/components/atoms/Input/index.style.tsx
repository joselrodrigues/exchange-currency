import styled from 'styled-components';

export const Input = styled.input`
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  height: 42px;
  padding: 13px 24px;
  font-family: 'Red Hat Display';
  font-weight: 400;
  font-size: 16px;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 152.2%;
  color: #9c9c9c;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
