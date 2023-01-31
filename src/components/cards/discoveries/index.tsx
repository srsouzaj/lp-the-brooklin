import { Typography } from "../../Typography"
import "./styles.css"

interface ProductCardInterface {
    imageSrc: string
    description: string
}

export const DiscoveriesCard = ({ imageSrc, description, }: ProductCardInterface) => {

    return (
        <div className="container-discover">
            <img src={imageSrc} width="100%" alt="" />

            <div className="description-discover">
                <Typography content={description} />
            </div>

        </ div>
    )
}