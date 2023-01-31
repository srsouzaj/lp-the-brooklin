import { AboutSection } from "./components/AboutSection"
import { BannerSection } from "./components/BannerSection"
import { Header } from "../../components/Header"
import { BenefitsSection } from "./components/BenefitsSection"
import { ProductSection } from "./components/ProductSection"
import { DiscoverSection } from "./components/DiscoverSection"
import { Footer } from "../../components/Footer"

export const HomeScreen = () => {
    return (
        <>
            <Header />
            <BannerSection />
            <AboutSection />
            <BenefitsSection />
            <ProductSection />
            <DiscoverSection />
            <Footer />
        </>
    )
}