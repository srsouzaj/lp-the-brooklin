import { Typography } from "../../../../components/Typography"
import "./styles.css"
import Product1 from "../../../../assets/Blue-Pack.png"
import Product2 from "../../../../assets/Green-Pack.png"
import Product3 from "../../../../assets/Pink-Pack.png"
import ProductDemonstration from "../../../../assets/product-demonstration.png"
import ProductDemonstrationMobile from "../../../../assets/product-demonstration-mobile.png"
import { ProductCard } from "../../../../components/cards/products"

export const ProductSection = () => {
    return (
        <>
            <Typography content={"Product"} type="heading" />
            <div className="card-list-product">
                <ProductCard imageSrc={Product1}
                    description="intibiome wellness daily intimate wash"
                    type="wellness" />
                <ProductCard
                    imageSrc={Product2}
                    description="intibiome active extra protection intimate wash"
                    type="active" />
                <ProductCard
                    imageSrc={Product3}
                    description="intibiome agecare dryness relief intimate wash"
                    type="agecare" />
            </div>
            {innerWidth > 415 ?
                (<img src={ProductDemonstration} alt="demonstration" className="img-demonstration" />
                ) : (
                    <img src={ProductDemonstrationMobile} alt="demonstration" className="img-demonstration" />)}

        </>
    )
}