import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from '@src/screens/home'
import { Dashboard } from '@src/screens/dashboard'
import '@src/application.scss'

const Application = () => (
  <Fragment>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  </Fragment>
)

export default Application
