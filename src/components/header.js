import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>⏣</h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `22px`,
          }}
        >
          Home
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/about-us"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `22px`,
          }}
        >
          About Us
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/programs"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `22px`,
          }}
        >
          Programs
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `22px`,
          }}
        >
          Contact
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/donate"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `22px`,
          }}
        >
          Donate
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
