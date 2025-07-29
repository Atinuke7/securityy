import { teamdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm, TitleLogo } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = teamdata.find((post) => post.id === parseInt(id));
  if(!post)return <div>Post not found</div>
  console.log(post);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Edo State Security Summit'  /> <br />
            <TitleSm title='Launch of the Edo State Command and Control Center' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <Title title={post.post} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt='speaker' width='100%' height='100%' className='round' />
              <Title title={post.role} className='title-bg' />
            </div>
            <div className='desc'>
              <TitleSm title='Security and safety is the collective responsibility of everyone and only through collaboration and commnication can true peace and safety be achieved.' />
              <p className='desc-p'> {post.desc1}</p>
              <p className='desc-p'>{post.desc2}</p>
              <p className='desc-p'>{post.desc3}</p>
            </div>
          </div>
          <Banner />

        </div>
      </section>
    </>
  )
}

export default SinglePost
