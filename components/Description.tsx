"use client"

export default function Description() {

    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    return (
        <div className="description relative z-10">
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index} >{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

type AnimatedTextProps = {
    children: React.ReactNode;
}

function AnimatedText({ children }: AnimatedTextProps) {
    return (
        <p>{children}</p>
    )
}