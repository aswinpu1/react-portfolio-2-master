import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="SPC cadet" issued="2017-18"  desc="In Kerala, the SPC program is designed to empower students by instilling discipline, teamwork, and a respect for the law." />
                <HonorCard name="NSS cadet" issued="2020-21" desc="Aims to promote the idea of social responsibility and community service among college and higher secondary students, fostering their holistic development while contributing to society." />
                <HonorCard name="NSS cadet" issued="2021-23" desc="Aims to promote the idea of social responsibility and community service among college and university students, fostering their holistic development while contributing to society." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
