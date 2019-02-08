import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { parseQueryString } from '@src/helpers/parse-query-string'

export class Dashboard extends Component {
  state = {
    accessToken: '',
    refreshToken: ''
  }

  componentDidMount() {
    const { access_token, refresh_token } = parseQueryString(location.hash) || {}

    if (hasTokens(access_token, refresh_token)) {
      this.setState({
        accessToken: access_token,
        refreshToken: refresh_token
      })
      history.pushState('', '/', location.pathname)
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Container>
          <Row>
            <Col> 
              <p>accessToken: {this.state.accessToken}</p>
              <p>refreshToken: {this.state.refreshToken}</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function hasTokens(access_token, refresh_token) {
  return Boolean(access_token && refresh_token)
}