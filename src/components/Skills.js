import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import css from "../assets/skills/CSS.3.svg"

// import bootstarp from "../assets/skills/Bootstrap.svg"

import tailwind from "../assets/skills/tailwind.svg"

import react from "../assets/skills/react.svg"
import html from "../assets/skills/html.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"


import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    {/* <SkillCard name="linux" experience="1 years" img={linux} /> */}
                    <SkillCard name="css" experience="6 month" img={css} />
                    {/* <SkillCard name="bootstrap" experience="6 month" img={bootstarp} /> */}
                    <SkillCard name="javascript" experience="6 month" img={javascript} />
                    <SkillCard name="html" experience="6 month" img={html} />
                    <SkillCard name="tailwind" experience="6 month" img={tailwind} />

                    <SkillCard name="react" experience="6 month" img={react} />

                    <SkillCard name="git" experience="6 month" img={git} />
                    <SkillCard name="express" experience="6 month" img={express} />

                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}