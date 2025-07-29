import React from "react"
import { Title, TitleLogo, TitleSm } from "./common/Title"
import { images } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Banner = () => {
  return (
    <>
    <section className='banner'>
  <div className='container'>
    <div className="banner-container">
      <TitleLogo title='Unveiling the all new 24/7 Edo State Emergency Short Code' />
      <Image src={images.num} alt='739' width={300} />
      <TitleLogo title='&' /> <br />
      <Image src={images.num2} alt='739' width={300} height={100} />
      <Link href='https://ec3.netlify.app' className='title-link mt-4'>
        <TitleSm title='More Info' />
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

export default Banner


{/* <section className='banner'>
  <div className='container'>
    <div className="flex flex-col md:flex-row md:flex-1 md:items-center">
      <div className="md:w-1/2 md:mr-6"> {/* Adjust width and margin as needed */}
  //       <TitleLogo title='Unveiling the all new 24/7 Edo State Emergency Short Code' />
  //       <Image src={images.num} alt='739' width={300} />
  //       <TitleLogo title='&' />
  //       <Image src={images.num2} alt='739' width={300} height={100} />
  //     </div>
  //     <Link href='https://ec3.netlify.app' className='title-link md:mt-4'> {/* Adjust margin-top for mobile */}
  //       <TitleSm title='More Info' />
  //     </Link>
  //   </div>
  // </div>
// </section> */}
