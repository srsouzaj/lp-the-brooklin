import Search from "../../../assets/ic.search.svg"
import Menu from "../../../assets/ic.menu.png"
import Logo from "../../../assets/logo-intibiome.jpg"

interface MenuMobileinterface {
    ShowingMenuBar?: () => void
}


export const MenuMobile = ({ ShowingMenuBar }: MenuMobileinterface) => {
    return (
        <nav>
            <img src={Menu} alt="" width="10%" height="50%" onClick={ShowingMenuBar} />
            <img className="logo" src={Logo} alt="logo" />
            <img src={Search} alt="" />
        </nav>
    )
}