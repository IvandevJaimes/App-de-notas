import styled from 'styled-components'

export const Wave = styled.div<{ $background: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  pointer-events: none;
  overflow-x: hidden;

  .wave-svg {
    transform: translateY(10px);
    width: 100%;
    height: auto;
    display: block;
  }

  .space-under  {
    height: 100px;
    background-color: ${props => props.$background};
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .space-under {
      height: 80px;
    }
    
    .wave-svg {
      transform: translateY(5px);
    }
  }
  
  @media (max-width: 480px) {
    .space-under {
      height: 60px;
    }
    
    .wave-svg {
      transform: translateY(2px);
    }
  }
`