import styled, { css } from 'styled-components'
import { slideIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0 10px 15px;
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
  ${props => props.fixed && css`
    ${slideIn()};
    left: 0;
    right: 0;
    top: -20px;
    z-index: 1;
    margin: 5px auto;
    position: fixed;
    max-width: 400px;
    background: #fff;
    padding: 10px 5px;
    border-radius: 60px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
