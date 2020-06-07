import React from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import LayoutContainer from 'components/commons/LayoutContainer'
import LayoutTrantitions from 'components/commons/LayoutTrantitions'
import styles from './home.scss'

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <LayoutContainer>
      <div className={styles.title}>{t('home')}</div>
      <LayoutTrantitions>Este es el home</LayoutTrantitions>
    </LayoutContainer>
  )
}

export default observer(Home)
