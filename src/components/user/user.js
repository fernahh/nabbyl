import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Notification } from '@src/components/notification'
import './user.scss'

export const User = (props) => (
  <Fragment>
    { props.hasError && <Notification /> }
    <div className="user">
      <div className="user__image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  </Fragment>
)

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  hasError: PropTypes.bool
}
