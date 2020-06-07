import React from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollMemory from 'react-router-scroll-memory'
import PrivateRoute from 'routing/PrivateRoute'
import { FORGOT_PASSWORD, LOGIN, HOME, REGISTER, RESET_PASSWORD } from 'routing/routes'
import RootStore from 'stores/RootStore'
import PageNotFound from 'components/commons/PageNotFound'
import UserContext from 'Context/UserContext'
import ForgotPassword from 'containers/ForgotPassword'
import dotenv from 'dotenv'
import Dashboard from 'containers/Dashboard'
import Register from 'containers/Register'
import Login from 'containers/Login'
import Home from 'containers/Home'
import ResetPassword from 'containers/ResetPassword'
import Navbar from './components/commons/Navbar'
import axiosInterceptors from './utils/axiosInterceptors'
import historyBrowser from './history'
import 'aos/dist/aos.css'
import './App.scss'

dotenv.config()
const rootStore = new RootStore()
axiosInterceptors(rootStore)

function App() {
  return (
    <UserContext.Provider value={rootStore}>
      <Router history={historyBrowser}>
        <ScrollMemory />
        <Navbar>
          <Switch>
            <Route exact path={REGISTER} component={Register} />
            <Route exact path={RESET_PASSWORD} component={ResetPassword} />
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={FORGOT_PASSWORD} component={ForgotPassword} />
            <Route exact path={HOME} component={Home} />
            <PrivateRoute
              exact
              isLogin={rootStore.authStore.isLogin}
              redirectPath={LOGIN}
              path="/dashboard"
              component={Dashboard}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Navbar>
      </Router>
    </UserContext.Provider>
  )
}

export default observer(App)
