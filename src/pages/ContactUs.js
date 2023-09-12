import React from 'react'
import Layout from '../layout/Layout'
import HeadTitle from '../components/HeadTitle'
import Connect from '../components/Connect'


const ContactUs = () => {
  return (
    <Layout>
      <div className="w-full h-full mb-40">
        <HeadTitle />
        <Connect />
      </div>
    </Layout>
  )
}

export default ContactUs