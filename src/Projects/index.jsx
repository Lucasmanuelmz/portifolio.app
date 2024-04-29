import { useState } from 'react';
import { PropTypes } from 'prop-types';
import './style.css'

export default function MyProjects({backgroundColor, boxShadow}) {
    const [showDetails, setShowDetails] = useState(false);

    function handleShow() {
        if (!showDetails) {
            setShowDetails(!showDetails)
        } else {
            setShowDetails(false)
        }
    }

    function playVideo() {
        const video = document.querySelector('.videos');
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }
    return (
         <section id='project' className="projects">
            <h2>Projetos</h2>
            <div className="project" style={{backgroundColor: backgroundColor, boxShadow: boxShadow}}>
                <video className="videos" src="/videos/fackshopp.mp4" controls onCanPlay={playVideo}></video>
                <div className='content-card'>
                    <h2 className='subtitle-d'>Fack shopp</h2>
                    <p>O projeto Fackshopp é uma demonstração das minhas habilidades em desenvolvimento web
                        utilizando React. Ao longo deste projeto, utilizei React para criar componentes reutilizáveis,
                        implementei rotas para uma navegação fluída, gerenciei o estado da aplicação e passei dados entre
                        componentes utilizando props.</p>
                    <button className='d-button' onClick={handleShow}>{showDetails ? "Ocultar detalhes": 'Ver detalhes'}</button>
                       {showDetails && <div className="more-content">
                        <p>Além disso, integrei o uso da API fetch para consumir dados externos e renderizá-los dinamicamente
                            na página. Isso proporcionou uma experiência interativa e atualizada para os usuários.</p>
                        <p>Um dos principais focos deste projeto foi garantir a responsividade, adaptando o layout e
                            os elementos da página para diferentes dispositivos e tamanhos de tela. Assim, o Fackshopp
                            oferece uma experiência consistente e agradável, independentemente do dispositivo utilizado.</p>
                        <p>Este projeto não apenas demonstra minhas habilidades técnicas em React e desenvolvimento web,
                            mas também minha capacidade de criar aplicações funcionais, dinâmicas e responsivas para
                            atender às necessidades dos usuários modernos.</p>
                    </div>} 
                </div>
            </div>
        </section>
    )
}

MyProjects.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    boxShadow: PropTypes.string.isRequired
}