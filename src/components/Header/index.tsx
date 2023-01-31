import Logo from "../../assets/logo-intibiome.jpg"
import { NavigationMenuBar } from "./MenuBar"
import "./styles.css"
import { MenuMobile } from "./MenuMobile"

interface Headerinterface {
    ShowingMenuBar?: () => void
}


export const Header = ({ ShowingMenuBar }: Headerinterface) => {

    return (
        <>
            {innerWidth > 415 ? (<nav>
                <img className="logo" src={Logo} alt="logo" />
            </nav>) : (
                < MenuMobile ShowingMenuBar={ShowingMenuBar} />
            )}

            <div className="menu">
                <NavigationMenuBar />
            </div>
        </>
    )
}