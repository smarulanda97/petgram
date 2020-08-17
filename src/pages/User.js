import React, { useContext } from 'react'
import { withLayout } from '../hoc/withLayout'
import { Context } from '../Context'
import { SubmitButton } from '../components/submit-button'
import { Container, Header } from '../components/user-form/styles'

const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <Container>
      <Header>
        <h2>Profile</h2>
      </Header>
      <SubmitButton onClick={removeAuth}>
        Logout
      </SubmitButton>
    </Container>
  )
}

export default withLayout(User, {
  categoryList: false
})
