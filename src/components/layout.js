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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
      <footer
        className="dark-bg"
        style={{
          position: `absolute`,
          bottom: `0`,
          paddingBottom: `1.45rem`,
          paddingTop: `1.45rem`,
          color: `#FEFBF5`,
          width: `100%`,
          paddingLeft: `5%`,
          fontSize: `12px`,
          display: `none`
        }}
        >
          © {new Date().getFullYear()}, Midash Ministry, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <div
          className="light-bg"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `24px`,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
