import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './screens/home'
import './application.scss'

const Application = () => (
  <Fragment>
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  </Fragment>
)

export default Application
