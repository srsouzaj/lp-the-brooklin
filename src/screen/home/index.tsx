import { AboutSection } from "./components/AboutSection"
import { BannerSection } from "./components/BannerSection"
import { Header } from "../../components/Header"
import { BenefitsSection } from "./components/BenefitsSection"
import { ProductSection } from "./components/ProductSection"
import { DiscoverSection } from "./components/DiscoverSection"
import { Footer } from "../../components/Footer"
import { useState } from "react"
import { MenuList } from "../../components/Header/MenuMobile/components/MenuList"

export const HomeScreen = () => {
    const [show, setShow] = useState<boolean>(false)

    function ShowingMenuBar() {
        setShow(!show)
    }


    return (
        <>
            <Header ShowingMenuBar={ShowingMenuBar} />
            {show && <MenuList />}
            <BannerSection />
            <AboutSection />
            <BenefitsSection />
            <ProductSection />
            <DiscoverSection />
            <Footer />
        </>
    )
}