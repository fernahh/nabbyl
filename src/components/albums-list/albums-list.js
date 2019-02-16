import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-grid-system'
import { Album } from '@src/components/album'

export const AlbumsList = props => {
  const { items } = props

  return (
    <Row className="albums_list">
      {items.map(item => (
        <Col xs={6} sm={4} md={3} key={item.album.id}>
          <Album album={item.album} />
        </Col>
      ))}
    </Row>
  )
}

AlbumsList.propTypes = {
  items: PropTypes.array.isRequired
}