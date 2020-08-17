import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import { withLayout } from '../hoc/withLayout'
import { UserForm, UserFormFooter } from '../components/user-form'
import { AuthMutation } from '../containers/AuthMutation'
import { useHistory } from 'react-router-dom'

const Register = (props) => {
  const history = useHistory();
  const { setIsAuth, isAuth } = useContext(Context)
  const urlParams = new window.URLSearchParams(window.location.search)

  useEffect(() => {
    isAuth && history.push(urlParams.get('redirect') || `/`)
  }, [isAuth])

  return (
    <AuthMutation>
      {
        ({ register }) => {
          const onSubmit = (input) => {
            register.singup({ variables: { input } })
            .then(({ data }) => setIsAuth(data.signup))
            .catch((e) => console.log(e))
          }
          return (
            <UserForm
              title={'Register'}
              disabled={register.loading}
              button={'Register'}
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
