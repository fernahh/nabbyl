import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { parseQueryString } from '@src/helpers/parse-query-string'
import { SpotifyUser } from '@src/containers/spotify-user'

export class Dashboard extends Component {
  state = {
    accessToken: ''
  }

  componentDidMount() {
    const { access_token } = parseQueryString(location.hash) || {}

    if (access_token) {
      this.setState({ accessToken: access_token })
      history.pushState('', '/', location.pathname)
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Container>
          <Row>
            <Col xs={12}>
              { this.state.accessToken 
                && <SpotifyUser accessToken={this.state.accessToken} />}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}