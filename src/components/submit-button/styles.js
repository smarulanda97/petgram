import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: #f87e12;
  border-radius: 3px;
  color: #fff;
  height: 40px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;  
  &[disabled] {
    cursor: none;
    background: #f87e1294;
  }
  ${props => props.outline && css`
    color: #d84260;
    background: #fff;
    margin-top: 10px;
    border: solid 1px #d84260;
  `}
`
