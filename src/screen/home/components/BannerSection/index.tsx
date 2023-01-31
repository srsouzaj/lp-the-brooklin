import BannerImg from "../../../../assets/banner-hero.png"
import BannerMobile from "../../../../assets/banner-hero-mobile.png"
import "./styles.css"

export const BannerSection = () => {
    return (
        <div className="banner">
            {innerWidth > 415 ? (
                <img src={BannerImg} alt="" height="100%" width="100%" />
            ) : (
                <img src={BannerMobile} alt="" height="100%" width="100%" />
            )}
        </div>
    )
}