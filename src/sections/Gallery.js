import { galleryData } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
//import team from "@/pages/team"
import React from "react"

const Gallery = () => {
    return (
        <>
          <section className='showcase'>
            <div className='container'>
              <div className='heading-title'>
                <Title title='Our Gallery' />
                <br />
               
                
            
              </div>
              <div className='hero-content grid-3 py'>
                {galleryData.map((item) => (
                  <Card data={item} key={item.id}  />
                ))}
              </div>
             
            </div>
          </section>
        </>
      )
}

export default Gallery;
