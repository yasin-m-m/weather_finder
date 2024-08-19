import React from 'react'

const Header = ({title}) => {
  return (
    <nav className="navbar navbar-light bg-warning">
  <div className="container">
    <span className="navbar-brand mb-0 h1 primary">{title}</span>
  </div>
</nav>
  )
}

export default Header