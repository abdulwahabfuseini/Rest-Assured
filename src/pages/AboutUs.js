import React from 'react'
import Layout from '../Layout/Layout'
import HeadTitle from "../Components/HeadTitle"
import AboutCard from '../Components/AboutSection/AboutCard'
import Content from '../Components/AboutSection/Content'


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