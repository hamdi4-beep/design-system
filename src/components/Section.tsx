type Props = {
    heading: string
    children: JSX.Element
}

function Section({
    heading,
    children
}: Props) {
    return (
        <section>
            <div className="section-header space-between">
                <h2>{heading}</h2>
            </div>

            {children}
        </section>
    )
}

export default Section