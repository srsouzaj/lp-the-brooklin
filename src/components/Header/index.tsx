import Logo from "../../assets/logo-intibiome.jpg"
import { NavigationMenuBar } from "./MenuBar"
import "./styles.css"


export const Header = () => {
    return (
        <>
            <nav>
                <img className="logo" src={Logo} alt="logo" />
            </nav>

            <div className="menu">
                <NavigationMenuBar />
            </div>
        </>
    )
}