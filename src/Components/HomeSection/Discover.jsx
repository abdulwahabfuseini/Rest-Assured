import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { DisCover } from '../../assets/Data'

const Discover = () => {
  return (
    <Container className="w-full h-full px-2 pt-5 sm:pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-8">
      <Row className="flex flex-col gap-4 sm:items-center sm:flex-row">
        <Col className="space-y-6 sm:w-2/5">
          <h1 className="text-2xl md:text-3xl">
            NEW PLACES TO <br /> DISCOVER
          </h1>
          <h2>Bedrooms, Resorts, Residence</h2>
        </Col>
        <Col className="grid grid-cols-2 gap-4 mb-14 md:grid-cols-4 sm:w-3/2">
          {
            DisCover.map((cover, index) => (
              <Col key={index} className="w-full">
                <img src={cover.image} alt="" className="object-cover w-full h-44" />
                <h6 className="py-2 text-xs text-center border-b-2 shadow-md border-dry bg-slate-100">{cover.location}</h6>
              </Col>
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Discover