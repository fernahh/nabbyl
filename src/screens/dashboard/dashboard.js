import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { parseQueryString } from '@src/helpers/parse-query-string'
import { SpotifyUser } from '@src/containers/spotify-user'
import { SpotifyAlbumsList } from '@src/containers/spotify-albums-list'

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
          {
            this.state.accessToken &&
            (<Fragment>
              <Row>
                <Col xs={12}>
                  <SpotifyUser accessToken={this.state.accessToken} />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <SpotifyAlbumsList accessToken={this.state.accessToken} />
                </Col>
              </Row>
            </Fragment>)
          }
        </Container>
      </div>
    )
  }
}