import { styled } from 'styled-components';
import { Wrapper } from '../../styles';

export const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  gap: 20px;
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    gap: 15px;
    
    .content {
      gap: 15px;
    }
  }
`

export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding-top: 20px;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    padding-top: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-top: 10px;
  }
`;

export const InputGroup = styled.div`
  background: ${props => props.theme.inputBackground};
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.accentLight};
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 8px;
    margin: 8px 0;
  }
`;

export const Input = styled.input`
  background: inherit;
  padding: 8px;
  border: none;
  color: inherit;
  flex: 1;
  min-width: 0;
  font-size: inherit;
  
  &::placeholder {
    color: ${props => props.theme.accent};
    opacity: 0.6;
  }
  
  @media (max-width: 480px) {
    padding: 6px;
    font-size: 16px;
  }
`;