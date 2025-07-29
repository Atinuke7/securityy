import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Event = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='THE EDO STATE SECURITY SUMMIT' /> <br />
            <br />
            <Title title='The first of its kind in Edo State!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Showcasing the unique infrasturcture of Edo State Security network' />
              <p className='desc-p'>The summit aims to highlight the advances made by the state security agencies over the past couple of years and how to best improve upon on ground practices to meet international standards.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>70%</h1>
                  <h3>Reduction in Crime rate</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>200+</h1>
                  <h3>Successful Security Intelligence</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>National awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/agency1.jpeg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Our goal is to strengthen and revitalize the security sector of Edo state, ensuring that lives and property of the state residents are safe and secured while assuring residents, investors and delegate that the state is safe for business opportunities and general living.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Event
