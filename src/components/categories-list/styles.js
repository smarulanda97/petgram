import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0 10px 15px;
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
