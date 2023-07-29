import React from 'react'
import Layout from '../Layout/Layout'
import HeadTitle from "../Components/HeadTitle"
import AboutCard from '../Components/About/AboutCard'
import Staff from '../Components/About/Staff'


const AboutUs = () => {
  return (
    <Layout>
       <div>
        <HeadTitle />
      </div>
      <div className="w-full h-full ">
        <AboutCard />
        <Staff />
      </div>
    </Layout>
  )
}

export default AboutUs