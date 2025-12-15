import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  p {
    margin-top: 30px;
    font-size: 1.1em;
    color: ${props => props.theme.accent};
  }
  
  @media (max-width: 768px) {
    p {
      margin-top: 20px;
      font-size: 1em;
    }
  }
`

export const Spinner = styled.span<{ $size: number }>`
  display: inline-block;
  position: relative;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  flex-shrink: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 3px solid ${props => props.theme.accent};
    animation: loader-spinner 1s ease-in infinite;
    border-radius: 50%;
  }

  &::before {
    width: 70%;
    height: 70%;
    left: 15%;
    top: 15%;
    border-bottom-color: transparent;
  }

  &::after {
    width: 100%;
    height: 100%;
    left: 0;
    border-left-color: transparent;
    animation-direction: reverse;
  }

  @keyframes loader-spinner {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media (max-width: 480px) {
    width: ${props => Math.max(props.$size * 0.7, 40)}px;
    height: ${props => Math.max(props.$size * 0.7, 40)}px;
  }
`