import React from "react"
import { Title, TitleLogo, TitleSm } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
//import { GalleryCard } from "./common/GalleryCard"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Gallery' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id}  />
            ))}
          </div>
          <div className='card links'>
            <Link href='/gallery'>
              <TitleSm title='VIEW MORE IMAGES' /> <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
