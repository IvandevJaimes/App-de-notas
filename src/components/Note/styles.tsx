import { keyframes, styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { hoverGrayStyle } from '../../styles';

const onLoadAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const NoteElement = styled(Link)<{ $delay: number }>`
  -webkit-box-shadow: ${props => props.theme.boxShadow};
  -moz-box-shadow: ${props => props.theme.boxShadow};
  box-shadow: ${props => props.theme.boxShadow};
  min-height: 120px;
  padding: 15px;
  position: relative;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  background-color: ${props => props.theme.elements};
  border: 2px solid ${props => props.theme.accentLight};
  ${hoverGrayStyle}
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-break: break-word;
  
  p {
    margin: 0;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
    font-size: 1em;
  }

  opacity: 0;
  transform: translateY(-20%);
  animation: .5s ${onLoadAnimation} ease-in ${props => `${props.$delay}s`} forwards;
  
  @media (max-width: 480px) {
    min-height: 100px;
    padding: 12px;
    border-radius: 8px;
    
    p {
      font-size: 0.95em;
      -webkit-line-clamp: 2;
    }
  }
`;

export const Date = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${props => props.theme.accent};
  font-size: 0.75em;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;