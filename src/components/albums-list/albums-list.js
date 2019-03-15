import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-grid-system'
import { TransitionGroup } from 'react-transition-group'
import { FadeTransition } from '@src/components/fade-transition'
import { Album } from '@src/components/album'
import { Loader } from '@src/components/loader'
import './albums-list.scss'

export const AlbumsList = props => {
  const { isRequesting, items } = props

  return (
    <TransitionGroup component={Row} className="albums_list">
      {items.map(item => (
        <FadeTransition key={item.album.id}>
          <Col xs={6} sm={4} md={3} key={item.album.id}>
            <Album album={item.album} />
          </Col>
        </FadeTransition>
      ))}
      { isRequesting && 
        <FadeTransition>
          <Col>
            <Loader />
          </Col> 
        </FadeTransition> }
    </TransitionGroup>
  )
}

AlbumsList.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}