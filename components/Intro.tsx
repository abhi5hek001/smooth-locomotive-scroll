"use client"

import Image from "next/image"
import backgroundImg from '@/public/background.jpg'
import introImg from '@/public/intro.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

export default function IntroPage() {

    const backgroundImage = useRef(null)
    const introImage = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top",
                end: "+=500px",
                scrub: true,
                markers: true
            }
        })

        timeline
            .from(backgroundImage.current, { clipPath: "inset(15%)" })
            .to(introImage.current, { height: "200px" }, 0)
    }, [])

    return (
        <div className="intro">
            <div ref={backgroundImage} className="backgroundImage absolute h-[140vh] w-[100%] top-0 brightness-[60%]">
                <Image
                    src={backgroundImg}
                    alt="Background Img"
                    fill={true}
                    className="object-cover"
                />
            </div>
            <div className="introContainer mt-[35vh] flex items-center justify-center">
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className="introImage absolute w-[350px] h-[475px] brightness-[70%]">
                    <Image
                        src={introImg}
                        alt="Intro Image"
                        fill={true}
                        className="object-cover object-top"
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7" className="z-10 text-white text-6xl uppercase font-bold">Smooth Scroll</h1>
            </div>
        </div>
    )
}