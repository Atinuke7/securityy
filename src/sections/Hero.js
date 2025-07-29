import { home } from "@/assets/data/dummydata";
import Brand from "@/components/Brand";
import ShowCase from "@/components/ShowCase";
import Banner from "@/components/Banner";

//import HomeSpeakers from "@/components/HomeSpeakers";
import Speakers from "@/components/Speakers";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";

const Hero = () => {
    return (
        <><section className='hero'>
            <div className='container'>
            
               
                
                <h1 className='hero-title'>EDO STATE SECURITY SUMMIT</h1>
                <TitleLogo  title='DECEMBER 7th 2023' caption='' className='logobg' />
                <TitleLogo  title='LAUNCHING OF THE ULTRA MODERN EDO STATE COMMAND AND CONTROL CENTER' caption='' className='logobg' />

                <div className='sub-heading'>
                    <br />
                    <br />
                    <TitleSm title='CONFERENCE' /> <span>.</span>
                    <TitleSm title='EC3 LAUNCH' /> <span>.</span>
                    <TitleSm title='DIGITAL SECURITY' />
                </div>
            </div>
        </section><section className='hero-sec'>
                <div className='container'>
                    <div className='heading-title'>
                        <TitleSm title='The Edo State Security Agenda' className='text-7xl' />
                        <p>Enhancing the capacity and effectiveness of law enforcement agencies, to maintain law and order. Implementing measures to prevent various types of crimes through targeted interventions, awareness campaigns, and community programs.</p>
                    </div>
                    <div className='hero-content grid-4'>
                        {home.map((item, i) => (
                            <div className='box' key={i}>
                                <span className='green'>{item.icon}</span> <br />
                                <br />
                                <h3>{item.title}</h3>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Speakers />
            <Testimonial />
            <Banner />
            <ShowCase />
            <Brand /> 
           
            </>
    )
}

export default Hero