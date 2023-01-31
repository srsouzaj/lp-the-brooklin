import { Typography } from "../../../../components/Typography"

import "./styles.css"

export const AboutSection = () => {
    return (
        <>
            <section className="about-container">
                <Typography content="we’re here to help" type={"heading"} />
                <Typography content="When it comes to caring for our most intimate areas,
             we’ve lost our connection. "
                    type={"normal"}
                />
                <Typography content="Embarrassed, unwilling, or unable to communicate with others,
            we’re needlessly neglecting the parts of our bodies that need it most. We’re here to help."
                    type={"normal"}
                />
                <Typography content="Providing you with the expertise, 
            knowledge and products you need to feel confident in your personal care."
                    type={"normal"}
                />
            </section>

        </>
    )
}