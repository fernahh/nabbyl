import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Clipboard from 'react-clipboard.js'
import './color-palette-button.scss'

export class ColorPaletteButton extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  state = {
    tooltipText: this.props.color
  }

  onCopySuccess = () => {
    this.setState({ 
      tooltipText: 'Copied!' 
    })

    setTimeout(() => {
      this.setState({ 
        tooltipText: this.props.color 
      })
    }, 1000)
  }

  render() {
    return (
      <Clipboard
        className="color_palette_button"
        data-clipboard-text={this.props.color}
        data-balloon={this.state.tooltipText}
        data-balloon-pos="up"
        onSuccess={this.onCopySuccess}
        style={{ backgroundColor: this.props.color}}>
      </Clipboard>
    )
  }
}
