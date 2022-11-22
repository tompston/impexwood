interface SectionProps {
    header: string
    content: JSX.Element
    sectionClass?: string
}

export function Section({ header, content, sectionClass }: SectionProps) {
    return (
        <div className={sectionClass}>
            <Header2 name={`${header}`} />
            <div>{content}</div>
        </div>
    )
}

export function Header2({ name }: { name: string }) {
    return <h5 className='fw-600 mb-1.5'>{name}</h5>
}