import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../Context'
import { withLayout } from '../hoc/withLayout'
import { UserForm, UserFormFooter } from '../components/user-form'
import { AuthMutation } from '../containers/AuthMutation'

const Login = (props) => {
  const history = useHistory();
  const { setIsAuth, isAuth } = useContext(Context)
  const urlParams = new window.URLSearchParams(window.location.search)

  useEffect(() => {
    isAuth && history.push(urlParams.get('redirect') || `/`)
  }, [isAuth])

  return <AuthMutation>
    {
      ({ login }) => {
        const onSubmit = (input) => {
          login.singIn({ variables: { input }})
            .then(({ data }) => setIsAuth(data.login))
            .catch(e => console.log(e))
        }
        return <UserForm
            title={'Login'}
            button={'Login'}
            onSubmit={onSubmit}
            disabled={login.loading}
            footer={() => (
              <UserFormFooter
                description={"Don't have an account?"}
                buttonText={'Create account'}
                path={'/auth/register'}
              />
            )}
            error={login.error && 'The email or password is invalid'}
          />
      }
    }
  </AuthMutation>
}

export default withLayout(Login, {
  categoryList: false
})
