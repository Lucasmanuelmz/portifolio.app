import {PropTypes} from "prop-types";
import AboutMe from "../About";
import MyHability from "../Hability";
import MyProjects from "../Projects";

export default function PrincipalComponent({color, backgroundColor, boxShadow}) {
    return (
        <main>
            <section className="container">
            <div className="greetings">
                <h2 className="subtitle-1">Olá, sou o</h2>
                <h2 className="subtitle-2">Lucas Manuel :)</h2>
                    <p className="text-1" style={{ color: color }}>Densenvolvedor front-end</p>
             </div>
                <div className="apresentation">
                    <img className="img-foto" src="/image/img-foto.png" alt="Minha foto" />
             </div>
            </section>
            <AboutMe />
           <MyHability />
            <MyProjects backgroundColor={backgroundColor} boxShadow={boxShadow} />
        </main>
    )
}

PrincipalComponent.propTypes = {
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    boxShadow: PropTypes.string.isRequired
}