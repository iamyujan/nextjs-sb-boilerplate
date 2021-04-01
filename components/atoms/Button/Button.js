import styled from 'styled-components'

const fontFamily = props => (props.fontFamily ? `
  font-family: ${props.fontFamily};
` : `
  font-family: 'ITC Avant Garde Gothic', sans-serif;
`)

const fontSize = props => (props.fontSize ? `
  font-size: ${props.fontSize};
` : `
  font-size: 1.8rem;
`)

const fontWeight = props => (props.fontWeight ? `
  font-weight: ${props.fontWeight};
` : `
  font-weight: 400;
`)

const lineHeight = props => (props.lineHeight ? `
  line-height: ${props.lineHeight};
` : `
  line-height: .9;
`)

const letterSpacing = props => (props.letterSpacing ? `
  letter-spacing: ${props.letterSpacing};
` : `
  letter-spacing: -1.5px;
`)

const padding = props => (props.padding ? `
  padding: ${props.padding};
` : `
  padding: 5px 20px;
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