function Skill() {
    return (
        <div className="space-y-3">
            <span>Skill</span>
            <div className="grid grid-cols-8 gap-y-2 gap-x-1">
                <div className="col-span-2 text-gray-500 truncate">Languages</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div className="text-gray-400 hover:text-gray-300">JavaScript</div>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500 truncate">Technologies</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div className="text-gray-400 hover:text-gray-300">Web3 • React • Redux • Puppeteer • Nginx • NodeJS • Express • MongoDB</div>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500 truncate">Knowledge</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div className="text-gray-400 hover:text-gray-300">Blockchain • Ethereum • L2 Rollup</div>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500 truncate">Proficiency</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div className="text-gray-400 hover:text-gray-300">Thai-Native • English-Toeic score 665</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skill;