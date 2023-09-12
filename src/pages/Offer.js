import React from 'react'
import Layout from '../layout/Layout'
import HeadTitle from '../components/HeadTitle'
import OfferItem from '../components/offerSection/OfferItem'

const Offer
 = () => {
  return (
    <Layout>
      <div className="w-full h-full mb-40">
        <HeadTitle />
        <OfferItem />
      </div>
    </Layout>
  )
}

export default Offer
