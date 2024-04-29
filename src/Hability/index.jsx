import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiWebpack } from "react-icons/si";
import './style.css'

export default function MyHability() {
    return (
         <section id="hability" className="h-container">
                <h2>Habilidades</h2>
                <div className="habilities">
                    <div className="my-stack">
                    <IoLogoHtml5 color='#E34F26' size={100} />
                    <h4>Html</h4>
                    </div>
                    <div className="my-stack">
                    <IoLogoCss3 color="#1572B6" size={100} />
                    <h4>CSS</h4>
                    </div>
                    <div className="my-stack">
                    <IoLogoJavascript color="#F7DF1E" size={100} />
                    <h4>JavaScript</h4>
                    </div>
                    <div className="my-stack">
                    <IoLogoReact color="#61DAFB" size={100} />
                    <h4>React js</h4>
                    </div>
                    <div className="my-stack">
                    <SiWebpack color="#8DD6F9" size={100} />
                    <h4>Webpack</h4>
                    </div>
                </div>
            </section>
    )
}