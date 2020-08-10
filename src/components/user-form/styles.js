import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: center;
  text-align: center;
  padding: 25px 15px;
  margin: 5%;
  border-radius: 10px;
`

export const Header = styled.header`
  & h2 {
    font-size: 2em;
    padding: 15px 0;
    color: #d84260;
    letter-spacing: -1px;
  }
  & p {
    font-size: 14px;
    text-align: left;
    padding: 10px 0;
    letter-spacing: 1px;
  }
`

export const Footer = styled.footer`
  & p {
    font-size: 14px;
    padding: 10px 0;
    text-align: center;
    letter-spacing: 1px;
  }
`

export const Form = styled.form`
  padding: 15px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 10px 5px;
  display: block;
  width: 100%;
`

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

export const Error = styled.span`
  left: 0;
  width: 100%;
  bottom: 10%;
  color: #d25757;
  display: block;
  position: fixed;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #ff000030;
`
