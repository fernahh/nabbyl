import React from 'react'
import PropTypes from 'prop-types'
import './album.scss'

export const Album = (props) => {
  const { album } = props
  
  return (
    <div className="album">
      <img alt={`Cover of the album ${album.name}`}
        className="album__image"
        src={album.images[0].url} />
    </div>
  )
}

Album.propTypes = {
  album: PropTypes.object.isRequired
}