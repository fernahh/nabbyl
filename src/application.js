import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { Home } from '@src/screens/home'
import { Dashboard } from '@src/screens/dashboard'
import '@src/application.scss'

const Application = () => (
  <Fragment>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="keywords" content="spotify, albums, color palettes" />
      <meta name="description" content="Connect with your Spotify account and get color palettes from your favorite albums."></meta>
      <meta name="application-name" content="nabbyl"></meta>
      <title>nabbyl: get color palettes from your favorite albums</title>
    </Helmet>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  </Fragment>
)

export default Application
