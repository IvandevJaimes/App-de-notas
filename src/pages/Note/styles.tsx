import { styled } from "styled-components";
import { Button } from "../../styles";

export const Date = styled.p`
  font-size: 0.9em;
  color: ${props => props.theme.accent};
  margin: 20px 0 15px 0;
  word-break: break-word;
  
  @media (max-width: 768px) {
    font-size: 0.85em;
    margin: 15px 0 10px 0;
  }
`;

export const ElementsGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  
  a {
    display: flex;
    align-items: center;
    
    button {
      width: auto;
      min-width: 80px;
    }
  }
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    
    a button {
      padding: 6px 12px;
      font-size: 0.85em;
    }
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${props => props.theme.red};
  border-color: ${props => props.theme.red};

  &:hover {
    background-color: ${props => props.theme.redOnHover};
    border-color: ${props => props.theme.redOnHover};
  }
  
  svg {
    color: #ffffff !important;
    font-weight: bold;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  margin-top: 20px;
  max-width: 100%;
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const Tag = styled.span`
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.background};
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95em;
  white-space: nowrap;
  word-break: break-word;
  
  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.9em;
  }
`;

export const TasksDisplaySection = styled.div`
  margin: 25px 0;
  padding: 15px;
  background-color: ${props => props.theme.inputBackground};
  border: 2px solid ${props => props.theme.accentLight};
  border-radius: 10px;
  width: 100%;
  max-width: 100%;

  h3 {
    margin: 0 0 15px 0;
    color: ${props => props.theme.accent};
    font-size: 1.1em;
    font-weight: 600;
  }
`;

export const TaskDisplayItem = styled.div<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 8px;
  background-color: ${props => props.theme.elements};
  border: 1px solid ${props => props.$completed ? props.theme.accentLight : props.theme.accent};
  border-radius: 8px;
  opacity: ${props => props.$completed ? 0.7 : 1};
  transition: all 250ms ease;

  &:hover {
    background-color: ${props => props.theme.onHover};
  }
`;

export const TaskCheckbox = styled.input`
  width: 22px;
  height: 22px;
  cursor: pointer;
  accent-color: ${props => props.theme.accent};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const TaskDisplayText = styled.span<{ $completed: boolean }>`
  flex: 1;
  word-break: break-word;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? props.theme.disabledFont : props.theme.fontColor};
  font-weight: ${props => props.$completed ? '400' : '500'};
  transition: all 250ms ease;
  line-height: 1.5;
`;

export const NoteParagraph = styled.p`
  word-break: break-word;
  min-height: 1.4em;
  line-height: 1.6;
  margin: 15px 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;

  a {
    color: ${props => props.theme.accent};
    text-decoration: underline;
    word-break: break-all;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95em;
    margin: 12px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9em;
    margin: 10px 0;
  }
`