import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = " Christian Achacoso".split("")
    const jobArray = "Software Engineer".split("")

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello!<br /> I'm
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={16}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19}/>
                </h1>
                <h2>Computer Science Graduate</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple" />
        </>
    );
}

export default Home