import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  
  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '.5s', type = 'ease' } = {}) => {
  return css`animation: ${time} ${fadeInKeyFrames} ${type};`
}

const slideInKeyFrames = keyframes`
  from {
    transform: translate3d(0, -100px, 0) scale(.65); 
  }
  to {
    transform: translate3d(0, 0, 0) scale(.65);
  }
`

export const slideIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`animation: ${time} ${slideInKeyFrames} ${type} forwards`
}
