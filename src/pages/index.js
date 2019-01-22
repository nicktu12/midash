import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to MIDASH</h1>
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>As the world changes all around us, acquiring technical skills is what brings opportunity and the promise of education is what offers hope. Who will teach and nurture these world changers of tomorrow, these global problem solvers? We will. Together with our education, instructor, training and employment partners we’ve made a commitment to developing the workforce of the future. Join us as we change the world – one student at a time.</p>
    <h2>Our Mission</h2>
    <p>MIDASH provides Veterans and Under-Served men/women an opportunity for greater future through IT training, Skills Acquisition, Mentorships and Job placement.</p>
    <h2>Our Vision</h2>
    <p>MIDASH is dedicated to bring life changing experience for veterans and under-served community by restoring hope through life skills empowerment so as to bring reduction in homeless community and elimination of poverty.</p>
  </Layout>
)

export default IndexPage
