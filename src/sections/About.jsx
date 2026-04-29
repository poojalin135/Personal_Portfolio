import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);
  useGSAP(()=>{
    SplitText.create(".about-text",{
      type:"lines, chars",
      onSplit(self){
        gsap.set(self.chars, {
          opacity:0.25
        });
        gsap.to(self.chars,{
          opacity:1,
          stagger: 0.5,
          scrollTrigger:{
            trigger:aboutRef.current, 
            start: "top 70%",
            end: "center center",
            scrub: 1
          }
        })
      }
    })
  })
  return (
    <>
    <div ref={aboutRef} className='relative z-10 bg-white h-screen rounded-tl-[60px] rounded-tr-[60px]'>
        <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[6vh] leading-[1.25]'>
            My name is Poojalin Sahoo, a passionate Software Developer with strong interest in MERN stack development. I also have a solid foundation in Java, OOP, and DBMS, and I’m eager to start my career by building impactful applications while continuously learning and improving my skills.
        </div>
    </div>
    </>
  )
}

export default About