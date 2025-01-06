"use client"

import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

export default function Description() {

    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    return (
        <div className="description relative z-10 text-3xl text-white uppercase mt-[30vw] ml-[10vw]">
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index} >{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

type AnimatedTextProps = {
    children: React.ReactNode;
}

function AnimatedText({ children }: AnimatedTextProps) {

    const text = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(
            text.current, 
            {
                x: "-200px",
                opacity: 0
            },
            {
                x: "0",
                opacity: 1,
                scrollTrigger: {
                    trigger: text.current,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                    scrub: true,
                    markers: true
                },
            })
    }, [])

    return (
        <p ref={text} className="m-0">{children}</p>
    )
}