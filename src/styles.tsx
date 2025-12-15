import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`

export const hoverGrayStyle = css`
  transition: background-color 250ms;

  &:hover {
    background-color: ${props => props.theme.onHover};
  }
`;

// global styles
export const Button = styled.button`
  padding: 10px 20px;
  font-family: inherit;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.accent};
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fontColor};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  ${hoverGrayStyle}
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

export const DisabledButton = styled(Button)`
  pointer-events: none;
  color: ${props => props.theme.disabledFont};
  border-color: ${props => props.theme.disabledFont};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  
  h1 {
    flex: 1;
    min-width: 200px;
    word-break: break-word;
    
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const FAIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
  color: ${props => props.theme.accent};
  flex-shrink: 0;

  &:hover {
    color: ${props => props.theme.accentDark};
  }
  
  @media (max-width: 480px) {
    margin: 0 3px;
    font-size: 0.9em;
  }
`