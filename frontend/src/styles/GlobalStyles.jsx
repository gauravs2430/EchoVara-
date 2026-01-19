import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 6rem 0;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 4rem 0;
    }
  }

  .gradient-text {
    background: linear-gradient(45deg, #00ff9d, #00b8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &-primary {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.primary};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.shadows.glow};
      }
    }

    &-secondary {
      background-color: transparent;
      color: ${props => props.theme.colors.accent};
      border: 2px solid ${props => props.theme.colors.accent};

      &:hover {
        background-color: ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.primary};
      }
    }

    &-large {
      padding: 1rem 3rem;
      font-size: 1.1rem;
    }
  }

  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyles;