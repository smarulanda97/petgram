import React, { useContext } from 'react'
import { Context } from '../Context'
import { withLayout } from '../hoc/withLayout'
import { UserForm, UserFormFooter } from '../components/user-form'
import { AuthMutation } from '../containers/AuthMutation'

const Login = (props) => {
  const { setIsAuth } = useContext(Context)

  return (
    <AuthMutation>
      {
        ({ login }) => {
          const onSubmit = (input) => {
            login.singIn({ variables: { input }})
              .then(data => console.log(data))
              .catch(e => console.log(e))
          }
          return (
            <UserForm
              title={'Sing In'}
              button={'Sing In'}
              onSubmit={onSubmit}
              disabled={login.loading}
              footer={() => (
                <UserFormFooter
                  description={"Don't have an account?"}
                  buttonText={'Create account'}
                  path={'/auth/register'}
                />
              )}
              error={login.error && 'Error login'}
            />
          )
        }
      }
    </AuthMutation>
  )
}

export default withLayout(Login, {
  categoryList: false
})
