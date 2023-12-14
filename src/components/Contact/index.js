import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray = "Contact Me".split("")
    const refForm = useRef()

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_z2n8uzu',
                'template_mquqpkd',
                refForm.current,
                '7P2pquXD4Jnp3ytMp'
            )
            .then(
                () => {
                    alert('Your message has been sent!')
                    window.location.reload(false)
                },
                () => alert('Failed to send your message, please try again.')
            )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={contactArray} 
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in opportunities for FrontEnd Development, Data Science and Software QA.
                    Feel free to contact me using the form below!
                </p>
                <div className='contact-form'>
                    <form ref= {refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple" />
        </>
        )
}

export default Contact