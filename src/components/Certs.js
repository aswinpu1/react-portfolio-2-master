import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/AI.png"
import adinusa from "../assets/certs/SD.png"


// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Completed Career Essentials in Generative AI " img={adinusa} issued="microsoft and linkedin" date="AUGUST 2024" />
                <CertCard name="Completed Career Essentials in software engineering" img={mtcna} issued="Mikrotik" date="Jun 2022" />
                {/* <CertCard name="Cloud Practitioner Essentials" img={dicodingAws} issued="Dicoding Indonesia" date="Feb 2022" />
                <CertCard name="Dasar Pemprograman Javascript" img={dicodingJs} issued="Dicodig Indonesia" date="Mei 2021" />
                <CertCard name="Jaringan Komputer untuk Pemula" img={dicodingNetwork} issued="Dicodig Indonesia" date="Jan 2023" />
                <CertCard name="Responsive Web Design " img={fccResponsive} issued="Dicodig Indonesia" date="Dec 21" />
                <CertCard name="Kursus Javascript" img={progateJs} issued="Progate" date="Oct 2020" />
                <CertCard name="Kursus HTML & CSS" img={progateHtml} issued="Progate" date="Oct 2020" /> */}

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
