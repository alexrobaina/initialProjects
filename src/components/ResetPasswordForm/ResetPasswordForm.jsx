import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Input from 'components/commons/Input'
// import UserContext from 'Context/UserContext'
import Button from 'components/commons/Button'
// import Loading from 'components/commons/Loading'
import styles from './resetPasswordForm.scss'

const ResetPasswordForm = () => {
  const history = useHistory()
  // const rootStore = useContext(UserContext)

  const { t } = useTranslation('resetPassword')

  const goToLogin = useCallback(() => {
    history.push('/')
    history.push('/login')
  })

  const handleChangePassword = useCallback(e => {
    console.log(e)
    // forgotPasswordStore.setPassword(e.target.value)
  })

  const handleChangeRepeatPassword = useCallback(e => {
    console.log(e)
    // forgotPasswordStore.setConfirmPassword(e.target.value)
  })

  const SubmitResetPassword = useCallback(() => {
    // forgotPasswordStore.resetPassword(token, authStore.user)
  })

  // if (forgotPasswordStore.isLoading) {
  //   return <Loading loadingRing />
  // }

  return (
    <div className={styles.centerForgotPassword}>
      <div className={styles.title}>{t('resetPassword')}</div>
      <div className={styles.inputForm}>
        <div className={styles.inputForm}>
          <Input
            isEdit
            canEdit
            type="password"
            placeholder={t('resetPassword')}
            handleChange={handleChangePassword}
            // inputStore={forgotPasswordStore.password}
          />
        </div>
        <div className={styles.inputForm}>
          <Input
            isEdit
            canEdit
            type="password"
            placeholder={t('repeatPassword')}
            handleChange={handleChangeRepeatPassword}
            // inputStore={forgotPasswordStore.confirmPassword}
          />
        </div>
      </div>
      <div className={styles.buttonForgotPassword}>
        <Button handleClick={SubmitResetPassword} bigButton text={t('change')} />
      </div>
      <div className={styles.forgotPassword}>
        <div onClick={goToLogin} className={styles.textSingIn}>
          {t('login')}
        </div>
      </div>
    </div>
  )
}

export default observer(ResetPasswordForm)
