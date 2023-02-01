import "./styles.css"
import Logo from "../../assets/logo-ulabs.png"
import Instagram from "../../assets/logo-instagram.png"

export const Footer = () => {
    return (
        <footer>
            <div className="links">
                <a href="">contact us</a>
                <a href="">faq</a>
                <a href="">site map</a>
                <a href="">privacy policy</a>
                <a href="">cookies policy</a>
                <a href="">legal notice</a>
            </div>

            <div className="links-img">
                <img src={Logo} id="ulabs" alt="Logo da U-labs" />
                <img src={Instagram} id="instagram" alt="Logo for redirect instagram" />
            </div>
        </footer>
    )
}