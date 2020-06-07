import React from 'react'
import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm'
import LayoutTrantitions from 'components/commons/LayoutTrantitions'
import styles from './resetPassword.scss'

const ResetPassword = () => {
  return (
    <LayoutTrantitions>
      <div className={styles.containerForgotPassword}>
        <div className={styles.containerForm}>
          <ResetPasswordForm />
        </div>
      </div>
    </LayoutTrantitions>
  )
}

export default ResetPassword
