import {useState} from 'react'

import profile from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub,  faLinkedinIn,faCodepen } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

     const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Aswin krishna pu</h1>
                    <p className="text-xl font-bold text-gray-300">MEARN FULL STACK DEVELOPER</p>
                    <p className="text-md font-light text-gray-400 ">Enthusiastic and detail-oriented software engineering graduate with a solid foundation in programming, data structures, and algorithms. Eager to apply knowledge to real-world projects, learn new technologies, and contribute to the success of dynamic teams. Passionate about problem-solving and building efficient, user-centric solutions.</p>
                </div>
                {/* <a href='http://blog.dama.zip' className='mt-2 block'>Read My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/aswinpu1' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://app.netlify.com/teams/aswinpu001/sites' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faCodepen} /></a>
                    </li>
                    <li>
                        <a href='www.linkedin.com/in/aswin-krishna-pu-429010313' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
