function SideProject(){
    return (
        <div className="space-y-3">
            <span>Side Project</span>
            <div className="grid grid-cols-8 gap-y-5">
                <div className="col-span-2 text-gray-500">2021</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div><a className="underline underline-offset-4 after:content-['_↗']" href="https://app.axieinfinity.com/marketplace/" target="_blank" rel="noreferrer">Automated Trading Bot - Axie</a></div>
                        <div className="text-gray-400 hover:text-gray-300">The bot collects daily trading data and utilizes it to analyze buying and selling prices to identify profitable opportunities. It executes automated buying and selling Axie that can generate a profit of 10% or more on <a className="underline underline-offset-4 after:content-['_↗']" href="https://app.roninchain.com/" target="_blank" rel="noreferrer">Ronin blockchain</a>.</div>
                        <div className="text-gray-500 hover:text-gray-400 rounded-md bg-gray-700 bg-opacity-20 px-2 py-1">Web3 • Puppeteer • MongoDB • Nginx • NodeJS</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SideProject;