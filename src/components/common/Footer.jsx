import Link from "next/link"
import Image from "next/image"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { images } from "@/constants"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='' caption='EdoState' className='logobg' />
              <TitleLogo title='Security Summit'  className='logobg' />
              <br />
              <span>
                Questions? Reach us at <br /> 
              </span>
              <br />
              <br />
              <span>
              <h4>+234 807 216 3264</h4>
              <br />
              <h4>+234 810 086 7672</h4>
                
              </span>
              
              <br />
              {/* <button className='button-primary'>Request for quote</button> */}
              <div className="images">
              <Image
      src={images.edostate}
      width={100}
      height={100}
      alt="Picture of the author"
    />

              </div>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/event'>About event</Link>
              </li>
              <li>
                <Link href='/speakers'>Our Speakers</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li>
              
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>Features</h3>
              <li>
                <Link href='#'>Security briefing</Link>
              </li>
              <li>
                <Link href='#'>Command and Control</Link>
              </li>
              <li>
                <Link href='#'>Security Architecture</Link>
              </li>
              <li>
                <Link href='#'>Lots More...</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 Edo State Security Summit.</span>
            </div>
            <div className='connect'>
              <span>klaus Programmings</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
