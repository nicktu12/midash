import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>MIDASH provides functional  IT skills to Veterans thus improving their quality of life. MIDASH is a social enterprise that promotes the cause of advancement of veterans who have sacrificed their time, talent  and laid their lives for our country United State of America (USA) and also for under-served communities through training in technology, skill acquisitions, entrepreneurship, mentoring and internship/job placement.</p>
    <p>MIDASH has a community of both women and men in Information Technology field including ethics, leadership skills, self empowerment/development and self esteem which leads to economic independence.</p>
    <p>MIDASH believe that everyone , irrespective of your background should be given another opportunity to be self sufficient economically and be part of a positive change to the community, city, state and country as a whole.</p>
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
      className="padding-bottom"
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
    <h2>The Team</h2>
    <em style={{ backgroundColor: `pink` }}>team images go here</em>
  </Layout>
)

export default AboutUs
