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
                <img src={Logo} width="116px" height="29px" alt="Logo da U-labs" />
                <img src={Instagram} width="42px" height="42px" alt="Logo for redirect instagram" />
            </div>
        </footer>
    )
}