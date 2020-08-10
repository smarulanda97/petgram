import React, { useContext } from 'react'
import { Context } from '../Context'
import { withLayout } from '../hoc/withLayout'
import { UserForm, UserFormFooter } from '../components/user-form'
import { AuthMutation } from '../containers/AuthMutation'

const Register = (props) => {
  const { setIsAuth } = useContext(Context)

  return (
    <AuthMutation>
      {
        ({ register }) => {
          const onSubmit = (input) => {
            register.singup({ variables: { input } })
            .then(() => setIsAuth(true))
            .catch((e) => console.log(e))
          }
          return (
            <UserForm
              title={'Sing up'}
              disabled={register.loading}
              button={'Sing up'}
              onSubmit={onSubmit}
              footer={() => (
                <UserFormFooter
                  description={"Already have an account?"}
                  buttonText={'Sing in'}
                  path={'/auth/login'}
                />
              )}
              error={register.error && 'The user already exists or an error has occurred'}
            />
          )
        }
      }
    </AuthMutation>
  )
}

export default withLayout(Register, {
  categoryList: false
})
