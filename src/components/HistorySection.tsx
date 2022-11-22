// import React from 'react'

export default function HistorySection() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-2 sm:grid-cols-2 xs:grid-cols-1'>
                {history.map((year, i) => (
                    <div key={i} className="bg-light-select-1 py-4 px-4 border-rad-3">
                        <h6 className='fs-7 opacity-90 fw-600'>{year.year}</h6>
                        <ul className=''>
                            {year.achievement.map((achievement) => (
                                <li className='mb-1 opacity-70' key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

interface YearAchievement {
    year: String
    achievement: string[]
}

const history: YearAchievement[] = [
    {
        year: "2017",
        achievement: [
            "Added new pellet factory that reprocesses all waste into fuel pelletswith capacity of 500t/month"
        ]
    },
    {
        year: "2018",
        achievement: [
            "Acquired 2,5ha of addition land 1800m2 of production buildings where new planning line was installed in combination with wood eye grading and 2 Opti cut units for automatization of processes",
            "Started a Finger jointing line in combination with the 2 Opti cut units"
        ]
    },
    {
        year: "2019",
        achievement: [
            "Added pallet production that covers us with all pallets needed to support our running productions",
        ]
    },
    {
        year: "2020",
        achievement: [
            "New project of putting in place 2000 m2 of production space for additional production units",
            "Planning line to serve construction market needs inside the domestic market and exports"
        ]
    },
]