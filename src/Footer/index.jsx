import {PropTypes } from "prop-types"

export default function Footer({footerColor}) {
    return (
        <footer style={{backgroundColor: footerColor}}>
            <p>&copy;2024 Desenvolvido por: Lucas Manuel</p>
        </footer>
    )
}

Footer.propTypes = {
  footerColor: PropTypes.string.isRequired
};