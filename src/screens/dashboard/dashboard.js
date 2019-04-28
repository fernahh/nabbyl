import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { SpotifyAlbumsList } from '@src/containers/spotify-albums-list'
import { AuthenticatedContent } from '@src/containers/authenticated-content'
import { Header } from '@src/components/header'
import './dashboard.scss'

export const Dashboard  = () => (
  <div className="dashboard">
    <AuthenticatedContent>
      <Header />
      <Container justify="center">
        <Row>
          <Col>
            <SpotifyAlbumsList />
          </Col>
        </Row>
      </Container>
    </AuthenticatedContent>
  </div>
)