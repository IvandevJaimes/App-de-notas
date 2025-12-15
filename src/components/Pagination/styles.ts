import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    background: ${props => props.theme.elements};
    border-radius: 10px;
    z-index: 1;
    border: 2px solid ${props => props.theme.accentLight};
    gap: 0;
    flex-shrink: 0;
  }

  ul > li {
    height: 2.5em;
    position: relative;
    flex-shrink: 0;
  }

  ul a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    height: 100%;
    padding: 0 0.8em;
    font-weight: 500;
  }

  ul > li,
  ul .fa-icon {
    transition: .2s color linear;
  }

  ul > li:not(.active):not(.disabled):hover,
  ul > li:hover a:not(.disabled) .fa-icon {
    color: ${props => props.theme.accent};
  }

  ul > li:first-child a {
    padding: 0 0.6em;
  }

  ul > li:last-child a {
    padding: 0 0.6em;
  }

  .disabled,
  .active {
    pointer-events: none;
  }
  
  .disabled .fa-icon {
    color: ${props => props.theme.disabledFont};
  }

  .active {
    color: ${props => props.theme.accent};
  }

  .active::before {
    content: '';
    display: block;
    width: 1.2em;
    height: 1.6em;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.accentLight};
    border-radius: 5px;
  }
  
  @media (max-width: 480px) {
    margin-top: 15px;
    padding: 5px;
    
    ul > li {
      height: 2.2em;
    }
    
    ul a {
      padding: 0 0.5em;
      font-size: 0.9em;
    }
  }
`