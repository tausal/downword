interface ColumnProps {
    direction: string,
    clues: string[]
}

export const Column = ({direction, clues}: ColumnProps) => {
    return (
        <section className={`column ${direction}`}>
            <header>{direction}</header>
            <div className="">
                {clues.map(clue => (
                    <span className="">{clue}</span>
                ))}
            </div>
        </section>
    )
}