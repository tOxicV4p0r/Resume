import React from "react";

const data = [
    {
        year: "2023",
        link: "https://little-lemon-image-nhvl2sce2q-uc.a.run.app/",
        code: "https://github.com/tOxicV4p0r/little-lemon/",
        title: "Little Lemon restaurant",
        description: "This project is part of the Meta Front-End Developer Capstone final project assessment and focuses solely on reservation functionality.",
        skill: "",
    },
    {
        year: "2023",
        link: "https://social-mern-image-nhvl2sce2q-as.a.run.app/",
        code: "https://github.com/tOxicV4p0r/social_mern_edroh/",
        title: "Social MERN stack",
        description: "This demo project is based on EdRoh's tutorial video on Youtube. I have fixed some bugs and added several features.",
        skill: "",
    },
    {
        year: "2021",
        link: "https://app.axieinfinity.com/marketplace/",
        code: "",
        title: "Automated Trading Bot - Axie",
        description: "The bot collects daily trading data and utilizes it to analyze buying and selling prices to identify profitable opportunities. It executes automated buying and selling Axie that can generate a profit of 10% or more on the Ronin blockchain.",
        skill: "Back : Web3 • Puppeteer • Nginx • NodeJS • MongoDB",
    }
]

function SideProject() {
    return (
        <div className="space-y-3">
            <span>Side Project</span>
            <div className="grid grid-cols-8 gap-y-5">
                {
                    data.map((e) => (
                        <React.Fragment key={e.title}>
                            <div className="col-span-2 text-gray-500">{e.year}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    <div><a className="underline underline-offset-4 after:content-['_↗']" href={e.link} target="_blank" rel="noreferrer">{e.title}</a></div>
                                    {e.code && <div><a className="underline underline-offset-4 after:content-['_↗']" href={e.code} target="_blank" rel="noreferrer">[Code]</a></div>}
                                    <div className="text-gray-400 hover:text-gray-300">{e.description}</div>
                                    {e.skill && <div className="text-gray-500 hover:text-gray-400 rounded-md bg-gray-700 bg-opacity-20 px-2 py-1">{e.skill}</div>}
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
};

export default SideProject;