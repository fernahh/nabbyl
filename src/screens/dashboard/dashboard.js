import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import { parseQueryString } from '@src/helpers/parse-query-string'
import { SpotifyUser } from '@src/containers/spotify-user'
import { SpotifyAlbumsList } from '@src/containers/spotify-albums-list'

export class Dashboard extends Component {
  state = {
    accessToken: ''
  }

  componentDidMount() {
    const { access_token } = parseQueryString(location.hash)

    this.setState({ 
      accessToken: access_token 
    })

    if (access_token) removeHash()
  }

  render() {
    if (this.state.accessToken === undefined) return <Redirect to="/" />

    return (
      this.state.accessToken && (
        <div className="dashboard">
          <Container>
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
          </Container>
        </div>
      )
    )
  }
}

function removeHash() {
  history.pushState('', '/', location.pathname)
}