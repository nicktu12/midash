import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import '../styles/global.css'
import '../styles/about.css'
import '../styles/programs.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="light-bg"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `24px`,
          marginTop: `70px`
        }}
      >
        {children}
      </div>
      <footer
      className="dark-bg"
      style={{
        color: `#FEFBF5`,
        width: `100%`,
        paddingLeft: `5%`,
        fontSize: `12px`,
        height: `70px`,
        display: `flex`,
        alignItems: `center`
      }}
      >
        © {new Date().getFullYear()}, Midash Ministry, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
