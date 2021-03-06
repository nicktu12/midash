import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{textAlign: `center`}}>Welcome to MIDASH</h1>
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div 
      style={{ 
        lineHeight: `2em`,
        marginBottom: `1.45rem`,
        textAlign: `center`
      }}
    >
      <p 
        className="hero-text"
        style={{
          textAlign: `center`,
          fontSize: `22px`,
          fontStyle: `italic`
        }}
      >
          As the world changes all around us, acquiring technical skills is what brings opportunity and the promise of education is what offers hope. Who will teach and nurture these world changers of tomorrow, these global problem solvers? We will. Together with our education, instructor, training and employment partners we’ve made a commitment to developing the workforce of the future. Join us as we change the world – one student at a time.
        </p>
    </div>
    <section 
      style={{
        display: `flex`, justifyContent: `space-around`
      }}
    >
      <article className="center-flex">
        <h2>Our Mission</h2>
        <p>MIDASH provides Veterans and Under-Served men/women an opportunity for greater future through IT training, Skills Acquisition, Mentorships and Job placement.</p>
      </article>
      <article className="center-flex">
        <h2>Our Vision</h2>
        <p>MIDASH is dedicated to bring life changing experience for veterans and under-served community by restoring hope through life skills empowerment so as to bring reduction in homeless community and elimination of poverty.</p>
      </article>
    </section>
    <div style={{display: `none`}}>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#FEFBF5`}}>light</p> 
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#1A323D`}}>dark</p>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#B5DEF0`}}>lightb</p>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#4D96B6`}}>darkb</p>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#F7D4E3`}}>lightr</p>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#800000`}}>darkr</p>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#BFFDEB`}}>lightg</p>
      <p style={{width: `200px`, height: `200px`, backgroundColor: `#69E5C0`}}>darkg</p>
    </div>
  </Layout>
)

export default IndexPage
