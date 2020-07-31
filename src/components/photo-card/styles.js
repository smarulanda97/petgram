import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Card = styled.article`
  position: relative;
  margin-bottom: 25px;
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn({ time: '3s' })};
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  position: absolute;
  bottom: 0%;
  background-color: #06060669;
  width: 100%;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  & svg {
    color: #ed4956;
    margin-right: 4px;
  }
`
