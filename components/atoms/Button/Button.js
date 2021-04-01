import styled from 'styled-components'

const fontFamily = props => (props.fontFamily ? `
  font-family: ${props.fontFamily};
` : `
  font-family: ${({theme}) => theme.buttonFont};
`)

const fontSize = props => (props.fontSize ? `
  font-size: ${props.fontSize};
` : `
  font-size: ${({theme}) => theme.buttonFontSize};
`)

const fontWeight = props => (props.fontWeight ? `
  font-weight: ${props.fontWeight};
` : `
  font-weight: ${({theme}) => theme.buttonFontWeight};
`)

const lineHeight = props => (props.lineHeight ? `
  line-height: ${props.lineHeight};
` : `
  line-height: ${({theme}) => theme.buttonLineHeight};
`)

const letterSpacing = props => (props.letterSpacing ? `
  letter-spacing: ${props.letterSpacing};
` : `
  letter-spacing: ${({theme}) => theme.buttonLetterSpacing};
`)

const padding = props => (props.padding ? `
  padding: ${props.padding};
` : `
  padding: ${({theme}) => theme.buttonPadding};
`)

const Button = styled.button`
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${padding}

  ${({variant}) => variant === 'secondary' ? `
    // Secondary Button
    ${({inverted}) => inverted ? `
      // Secondary Button Inverted
      color: white;
      background: black;
    `: `
      // Secondary Button Normal
      color: black;
      background: white;
    `}
  `: `
    ${({inverted}) => inverted ? `
      // Primary Button Inverted
      color: white;
      background: red;
    `: `
      // Primary Button Normal
      color: red;
      background: white;
    `}
  `}
`

export default Button