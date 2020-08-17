import React from 'react'
import { useHistory } from 'react-router-dom'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Container, Header, Footer, Error } from './styles'

export const UserForm = ({ onSubmit, title, button, error, disabled, header, footer }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Header>
        <h2>{ title }</h2>
        { header && header() }
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input type={'email'} placeholder={'Email'} { ...email } />
        <Input type={'password'} placeholder={'Password'} { ...password }/>
        <Button disabled={disabled}>{ button }</Button>
      </Form>
      <Footer>
        {error && <Error>{ error }</Error>}
        { footer && footer() }
      </Footer>
    </Container>
  )
}

export const UserFormFooter = ({ description = '', buttonText = '', path = '/' }) => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const history = useHistory();
  return (
    <div>
      <p>{ description }</p>
      <Button
        outline
        onClick={() => history.push(`${path}?redirect=${urlParams.get('redirect') || '/'}`)}
      >{ buttonText }</Button>
    </div>
  )
}
