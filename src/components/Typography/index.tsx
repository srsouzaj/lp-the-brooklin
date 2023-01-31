import "./styles.css"

interface TypographyInterface {
    content: string
    type?: "heading" | "normal"

}

export const Typography = ({ content, type = "normal" }: TypographyInterface) => {
    return (
        type === "heading" ? (
            <h1>{content}</h1>
        ) : (
            <p>{content}</p>
        )
    )
}