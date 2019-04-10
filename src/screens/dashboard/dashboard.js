import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import { parseQueryString } from '@src/helpers/parse-query-string'
import { SpotifyAlbumsList } from '@src/containers/spotify-albums-list'
import { Header } from '@src/components/header'
import { TokenContext } from '@src/components/token-context'
import './dashboard.scss'

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
          <TokenContext.Provider value={{ accessToken: this.state.accessToken }}>
            <Header />
            <Container justify="center">
              <Row>
                <Col>
                  <SpotifyAlbumsList />
                </Col>
              </Row>
            </Container>
          </TokenContext.Provider>
        </div>
      )
    )
  }
}

function removeHash() {
  history.pushState('', '/', location.pathname)
}