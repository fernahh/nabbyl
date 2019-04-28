import React from 'react'
import './menu.scss'

export const Menu = () => (
  <ul className="menu">
    <li className="menu__item">
      <a href="https://github.com/fernahh/nabbyl" className="menu__link">
        Source Code
      </a>
    </li>
    <li className="menu__item">
      Created by <a href="https://fernahh.com.br" className="menu__link">
        @fernahh
      </a>
    </li>
  </ul>
)
