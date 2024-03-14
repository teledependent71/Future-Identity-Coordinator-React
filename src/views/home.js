import React from 'react'

import { Helmet } from 'react-helmet'

import Component2 from '../components/component2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Identity Coordinator</title>
        <meta property="og:title" content="Future Identity Coordinator" />
      </Helmet>
      <Component2></Component2>
    </div>
  )
}

export default Home
