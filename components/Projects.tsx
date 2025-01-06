"use client"

import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);
    const imageContainer = useRef(null)
    const projects = [
        {
            title: "Salar de Atacama",
            src: "salar_de_atacama.jpg"
        },
        {
            title: "Valle de la luna",
            src: "valle_de_la_muerte.jpeg"
        },
        {
            title: "Miscanti Lake",
            src: "miscani_lake.jpeg"
        },
        {
            title: "Miniques Lagoons",
            src: "miniques_lagoon.jpg"
        },
    ]

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const scrollTriggerInstance = ScrollTrigger.create({
            trigger: imageContainer.current,
            start: "top center", // Start when the top of the container reaches the center of the viewport
            end: "+=200px", // Pinning lasts for 1000px of scrolling
            pin: true, // Pin the element during the scroll
            markers: true, // Debugging markers (remove for production)
        });
    
        return () => {
            scrollTriggerInstance.kill(); // Clean up ScrollTrigger instance
        };
    }, []);
    

    return (
        <div className="projects flex flex-col mt-[25vh] text-white p-[10%]">
            <div className="projectDescription flex h-[700px] gap-[5%] w-[100%] justify-between">
                <div ref={imageContainer} className="imageContainer relative h-[100%] w-[40%]">
                    <Image
                        src={`/${projects[selectedProject].src}`}
                        fill={true}
                        alt='image'
                        className='object-cover'
                    />
                </div>
                <div className="column w-[20%] text-[1.5vw]">
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className="column w-[20%] text-[1vw] items-end">
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>
            <div className="projectList mt-[200px] flex flex-col">
                {
                    projects.map((project, index) => {
                        return <div onMouseOver={()=>{setSelectedProject(index)}} className="projectEl flex justify-end border-t-[1px] border-t-white last:border-b-[1px] last:border-b-white font-[3vw]" key={`p_${index}`}>
                            <p className='m-0 mt-[40px] mb-[20px] text-4xl uppercase font-bold'>{project.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
