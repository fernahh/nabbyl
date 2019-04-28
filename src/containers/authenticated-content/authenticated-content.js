import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { parseQueryString } from '@src/helpers/parse-query-string'
import { TokenContext } from '@src/components/token-context'

export class AuthenticatedContent extends Component {
  state = {
    accessToken: ''
  }

  componentDidMount() {
    const { access_token } = parseQueryString(location.hash)

    this.setState({ 
      accessToken: access_token 
    })

    if (access_token) {
      history.pushState('', '/', location.pathname)
    }
  }

  render() {
    const { accessToken } = this.state

    if (accessToken === undefined) {
      return <Redirect to="/" />
    }

    return (
      accessToken && (
        <TokenContext.Provider value={{ accessToken: accessToken }}>
          { this.props.children }
        </TokenContext.Provider>
      )
    )
  }
}

AuthenticatedContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}