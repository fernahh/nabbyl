import React from 'react'
import PropTypes from 'prop-types'
import './albums-list.scss'

export const AlbumsList = props => {
  const { items } = props

  return (
    <ul className="albums_list">
      {items.map(item => (
        <li key={item.album.id} className="albums_list__item">
          {item.album.name}
        </li>
      ))}
    </ul>
  )
}

AlbumsList.propTypes = {
  items: PropTypes.array.isRequired
}