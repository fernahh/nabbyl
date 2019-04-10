import React from 'react'
import { Container, Col, Row } from 'react-grid-system'
import { Logo } from '@src/components/logo'
import { Logout } from '@src/components/logout'
import { SpotifyUser } from '@src/containers/spotify-user'
import './header.scss'

export const Header = () => (
  <header className="header">
    <Container style={{ width: '100%'}}>
      <Row justify="between">
        <Col xs={6}>
          <Logo size={40} />
        </Col>
        <Col xs={6} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'end' 
        }}>
          <SpotifyUser />
          <Logout /> 
        </Col>
      </Row>
    </Container>
  </header>
)