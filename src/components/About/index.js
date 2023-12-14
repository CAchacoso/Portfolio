import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return(
        <>
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a Computer Science graduate from San Francisco State University.
                I am currently open to work as a Software Developer, Software Engineer, and Data Scientist.</p>
                <p>In my free time when I'm not coding, I like playing Football, Baseball, Weightlifting, and hanging out with friends.
                I am also a gamer and Twitch streamer who streams occasionally.</p>
                <p>Some programming and web development languages I have proficient experience with are:
                Java, C++, C#, HTML, CSS, JavaScript, PHP, Python, R, and MATLAB.</p>
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple" />
        </>
    );
}

export default About