import React from 'react'
import Layout from '../layout/Layout'
import HeadTitle from "../components/HeadTitle"
import Content from '../components/aboutSection/Content'
import Background from '../components/aboutSection/Backgroung'


const AboutUs = () => {
  return (
    <Layout>
       <div className='w-full h-full overflow-hidden'>
        <HeadTitle />
        <Background />
        <Content />
      </div>
    </Layout>
  )
}

export default AboutUs