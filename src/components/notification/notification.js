import React from 'react'
import './notification.scss'

export const Notification = () => (
  <div className="notification notification--error">
    <header className="notification__header">
      <h1 className="notification__header__title">Ooh, no!</h1>
    </header>
    <section className="notification__content">
      <p>Something went wrong. Please try again later.</p>
    </section>
  </div>
)