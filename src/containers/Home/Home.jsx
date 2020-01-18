import React, { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import c from 'classnames'
import InitialFormFilters from '../../components/InitialFormFilters'
import Title from '../../components/commons/Title/Title'
import styles from './home.module.scss'
import Navbar from '../../components/commons/Navbar/Navbar'

const Home = () => {
  return (
    <Fragment>
      <Title
        title={'Search for your best friend'}
        subTitle={'Do not buy a breed pet, adopt a homeless one'}
      />
    </Fragment>
  )
}
export default Home
