import { teamdata } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
//import team from "@/pages/team"
import React from "react"

const Speakers = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET THE SPEAKERS' /> <br />
            <br />
            <Title title='A team of highly qualified, professional and experienced security analysts' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} role={item.role} path='speaker' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Speakers
