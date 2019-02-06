import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '@src/screens/home'
import '@src/application.scss'

const Application = () => (
  <Fragment>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Fragment>
)

export default Application
