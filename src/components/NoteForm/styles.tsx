import { styled } from "styled-components";

export const InputGroup = styled.div<{ $redShadow?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 8px;
  width: 100%;
  max-width: 100%;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    word-break: break-word;
  }

  input,
  textarea {
    padding: 12px;
    font-family: inherit;
    font-size: inherit;
    border: 2px solid ${props => props.theme.accent};
    background-color: ${props => props.theme.elements};
    color: inherit;
    border-radius: 8px;
    resize: vertical;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    -webkit-box-shadow: ${props => props.$redShadow ? `inset 0px 0px 11px -3px ${props.theme.red}` : 'none'};
    -moz-box-shadow: ${props => props.$redShadow ? `inset 0px 0px 11px -3px ${props.theme.red}` : 'none'};
    box-shadow: ${props => props.$redShadow ? `inset 0px 0px 11px -3px ${props.theme.red}` : 'none'};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.accentDark};
    }
  }

  textarea {
    min-height: 150px;
    max-height: 400px;
  }
  
  @media (max-width: 768px) {
    margin: 15px 0;
    
    input,
    textarea {
      padding: 10px;
      font-size: 16px;
    }
    
    textarea {
      min-height: 120px;
    }
  }
`;

export const RequiredMessage = styled.span`
  color: ${props => props.theme.red};
  margin-left: 10px;
  font-size: 0.8em;
  font-weight: 500;
`;

export const TasksSection = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: ${props => props.theme.inputBackground};
  border: 2px solid ${props => props.theme.accentLight};
  border-radius: 10px;
  width: 100%;
  max-width: 100%;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 12px;
    color: ${props => props.theme.fontColor};
  }
`;

export const TaskItem = styled.div<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${props => props.theme.accent};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const TaskText = styled.span<{ $completed: boolean }>`
  flex: 1;
  word-break: break-word;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  color: ${props => props.$completed ? props.theme.disabledFont : props.theme.fontColor};
  font-weight: ${props => props.$completed ? '400' : '500'};
  transition: all 250ms ease;
`;

export const TaskDeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${props => props.theme.red};
    transition: color 250ms ease;
  }

  &:hover svg {
    color: ${props => props.theme.redOnHover};
  }

  @media (max-width: 480px) {
    padding: 3px;
  }
`;