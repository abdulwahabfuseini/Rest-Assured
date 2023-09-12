import React from 'react'
import Layout from '../layout/Layout'
import HeadTitle from "../components/HeadTitle"
import AboutCard from '../components/aboutSection/AboutCard'
import Content from '../components/aboutSection/Content'


const AboutUs = () => {
  return (
    <Layout>
       <div className='w-full h-full overflow-hidden'>
        <HeadTitle />
        <AboutCard />
        <Content />
      </div>
    </Layout>
  )
}

export default AboutUs