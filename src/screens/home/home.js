import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Logo } from '@src/components/logo'
import { Banner } from '@src/components/banner'
import { ConnectButton } from '@src/components/connect-button'
import './home.scss'

export const Home = () => (
  <div className="home">
    <Container justify="center">
      <Row>
        <Col>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10} lg={8} xl={7}>
          <Banner />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={7} md={6} lg={4}>
          <ConnectButton />
        </Col>
      </Row>
    </Container>
  </div>
)
