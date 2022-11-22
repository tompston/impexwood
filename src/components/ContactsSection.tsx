export default function ContactsSection() {
    return (

        <div>
            <hr className="mb-4" />
            <div className="flex flex-row gap-8 sm:flex-col sm:gap-4 " id="contacts">

                {contacts.map((x, i) => (
                    <div key={i} className="max-w-[170px] leading-5">
                        <div className="fw-300 opacity-70 fs-9">{x.label}</div>
                        <div className="fw-500">{x.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

interface ContactsInfo {
    label: string
    value: string
}

const contacts: ContactsInfo[] = [
    {
        label: "Address",
        value: "Latvija, Limbaži, Meža iela 8, LV4001"
    },
    {
        label: "Email",
        value: "info@impexwood.lv"
    },
    {
        label: "Phone",
        value: "+371 29194338"
    }
]
