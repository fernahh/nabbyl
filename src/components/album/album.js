import React from 'react'
import PropTypes from 'prop-types'
import { ColorPalette } from '@src/components/color-palette'
import './album.scss'

export const Album = (props) => {
  const { album } = props
  
  return (
    <div className="album">
      <img alt={`Cover of the album ${album.name}`}
        className="album__image"
        src={album.images[0].url} />
      <div className="album__info">
        <div className="album__info__content">
          <span className="album__info__name">{album.name}</span>
          <span className="album__info__artist">{album.artists[0].name}</span>
        </div>
        <ColorPalette colors={album.colors} />
      </div>
    </div>
  )
}

Album.propTypes = {
  album: PropTypes.object.isRequired
}