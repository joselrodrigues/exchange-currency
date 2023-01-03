import styled from 'styled-components';

interface DropdownProps {
  isVisible?: boolean;
}
interface OptionProps {
  value?: string;
}

export const DropdownContainer = styled.div<DropdownProps>`
  position: relative;
  & > .link + .select {
    ${({ isVisible }) =>
      isVisible &&
      `opacity: 1;
    transform: translateY(0);
    pointer-events: auto;`}
  }
`;
export const Button = styled.button`
  background: ${({ disabled }) => (disabled ? '#EEEEEE' : '#ffffff')};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  text-align: left;
  width: 100%;
  height: 42px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  line-height: 21px;
  font-family: 'Red Hat Display';
  text-decoration: none;
  cursor: pointer;
`;

export const Select = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25rem);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out,
    background-color 150ms ease-in-out;
  transform: translateY(-10px);

  & > div:hover {
    background-color: #eeeeee;
    border-radius: 8px;
  }
`;

export const Option = styled.div<OptionProps>`
  display: flex;
  height: 48px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  gap: 8px;
  font-size: 16px;
  line-height: 21px;
  padding: 13px 24px;
  box-sizing: border-box;
  &:last-child {
    border-bottom: none;
  }
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const DownArrowImage = styled.img`
  width: 9.33px;
  height: 5.33px;
`;

export const Text = styled.div`
  flex: 1;
`;
