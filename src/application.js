import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Home } from '@src/screens/home'
import { Dashboard } from '@src/screens/dashboard'
import '@src/application.scss'

const Application = () => (
  <Fragment>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="keywords" content="spotify, albums, color palettes" />
      <meta name="description" content="Connect with your Spotify account and get color palettes from your favorite albums." />
      <meta name="application-name" content="nabbyl" />
      <title>nabbyl: get color palettes from your favorite albums</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@fernahh" />
      <meta name="twitter:title" content="nabbyl: get color palettes from your favorite albums" />
      <meta name="twitter:description" content="Connect with your Spotify account and get color palettes from your favorite albums." />
      <meta name="twitter:image" content="https://nabbyl.com/static/assets/images/banner.jpg" />
      <meta property="og:url" content="https://nabbyl.com" />
      <meta property="og:title" content="nabbyl: get color palettes from your favorite albums" />
      <meta property="og:description" content="Connect with your Spotify account and get color palettes from your favorite albums." />
      <meta property="og:image" content="https://nabbyl.com/static/assets/images/banner.jpg" />
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
