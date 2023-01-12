import styled from 'styled-components';

export const ToolbarContainer = styled.div`
  display: flex;
  height: 234px;
  justify-content: flex-end;
  flex-direction: column;
  box-sizing: border-box;
  padding-inline: 10rem;
  padding-bottom: 45px;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 27px 0;
`;

export const ToolbarWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  gap: 13px;
`;

export const EqualSign = styled.div`
  display: flex;
  height: 42px;
  justify-content: center;
  align-items: center;
`;
