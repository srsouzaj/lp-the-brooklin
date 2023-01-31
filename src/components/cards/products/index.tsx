import { useMemo } from "react"
import { Typography } from "../../Typography"
import "./styles.css"

interface ProductCardInterface {
    imageSrc: string
    description: string
    type: "wellness" | "active" | "agecare"
}

export const ProductCard = ({ imageSrc, description, type }: ProductCardInterface) => {
    const colorBackground = useMemo(() => {
        if (type === "wellness") return "#389CD6"
        if (type === "active") return "#309D5F"
        if (type === "agecare") return "#EE6381"
    }, [type])

    return (
        <div className="container-card">
            <img className="img-product" src={imageSrc} alt="" />
            <Typography content={description} />
            <div className="type-product" style={{ backgroundColor: colorBackground }}>
                <p>{type}</p>
            </div>
        </ div>
    )
}