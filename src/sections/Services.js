import { service } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='PROUDLY POWERED BY' /> <br />
            <br />
            <Title title='Edo State Government' className='title-bg' />
            <Title title='Ministry of Public Security and Safety' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {service.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
