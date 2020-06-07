import React from 'react'
import PropTypes from 'prop-types'
import styles from './toggleMenuUser.scss'

const ToggleMenuUser = ({ handleMenu }) => {
  return (
    <div className={styles.container}>
      <div className={styles.open}>
        <div onClick={handleMenu} className={styles.containerSelects}>
          menu
        </div>
      </div>
    </div>
  )
}

ToggleMenuUser.propTypes = {
  handleMenu: PropTypes.func.isRequired,
}

export default ToggleMenuUser
