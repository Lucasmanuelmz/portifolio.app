import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PropTypes } from 'prop-types';
import './style.css'
import { BiSolidPhone } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";


export default function Contact({color}) {
    return (
        <section id='contact' className='contact'>
            <h2>Contatos</h2>
            <div className="contact-container">
                <div className="card">
                    <a href="mailto:testadormoz@gmail.com"><MdOutlineAlternateEmail color={color}  size={30}/></a>
                    <a href="mailto:testadormoz@gmail.com"  style={{color: color}} className="icon-contact invisibilities">alfacetj5@gmail.com</a>
                </div>
                <div className="card">
                     <a href="tel:+258846674873" style={{color: color}} className="icon-contact"><BiSolidPhone color={color} size={30}/></a>
                    <a href="tel:+258846674873" style={{color: color}} className="icon-contact  invisibilities">+258 84 667 4873</a>
                </div>
                <div className="card">
                    <a href="https://linkedin.com/in/lucas-manuel199988463" className="icon-contact"><FaLinkedin color={color} size={30} /></a>
                    <a href="https://linkedin.com/in/lucas-manuel199988463" className="icon-contact  invisibilities" style={{ color: color }}>Linkedin</a>
                </div>
                <div className="card">
                    <a href="https://github.com/Lucasmanuelmz" className="icon-contact"><FaGithub color={color} size={30} /></a>
                    <a href="https://github.com/Lucasmanuelmz" className="icon-contact  invisibilities" style={{color:color}}>GitHub</a>
                </div>
            </div>
        </section>
    )
}

Contact.propTypes = {
    color: PropTypes.string.isRequired
}