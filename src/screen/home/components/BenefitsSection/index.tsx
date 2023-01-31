import Benefits from "../../../../assets/benefits.png"
import { Typography } from "../../../../components/Typography"
import "./styles.css"


export const BenefitsSection = () => {
    return (
        <>
            <img className="benefits-img" src={Benefits} alt="Benefits" />
            <section className="benefits-container">

                <Typography content="whatever your age. whatever your lifestyle. whatever your interests."
                    type={"heading"} />
                <Typography content="Co-created with gynaecologists, our revolutionary products have been expertly
             developed to support your intimate microbiome and pH balance, and strengthen overall natural health."
                />
                <Typography content="As the experts in intimate hygiene, we want to bring
            discussion about intimate wellness care out of the dark and demystify the taboos that surround it."
                />
            </section>
        </>

    )
}