function Skill() {
    return (
        <div className="space-y-3">
            <span>Skill</span>
            <div className="grid grid-cols-8 gap-y-2">
                <div className="col-span-2 text-gray-500">Languages</div>
                <div className="col-span-6">
                    <div class="flex flex-col space-y-2">
                        <div className="text-gray-400">JavaScript • C++ • C# • Solidity</div>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500">Technologies</div>
                <div className="col-span-6">
                    <div class="flex flex-col space-y-2">
                        <div className="text-gray-400">Web3 • React • Redux-Toolkit • Redux-Saga • Tailwind • AntD • Puppeteer • Nginx • NodeJS • MongoDB</div>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500">Other Knowledge</div>
                <div className="col-span-6">
                    <div class="flex flex-col space-y-2">
                        <div className="text-gray-400">Blockchain • Ethereum • L2 Rollup</div>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500">Proficiency</div>
                <div className="col-span-6">
                    <div class="flex flex-col space-y-2">
                        <div className="text-gray-400">Thai-Native • English-Toeic score 665</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skill;