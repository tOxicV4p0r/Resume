function Experience() {
    return (
        <div className="space-y-3">
            <span>Work Experience</span>
            <div className="grid grid-cols-8 gap-y-5">
                <div className="col-span-2 text-gray-500">2020-2021</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div className="underline underline-offset-4 after:content-['_↗']">
                            <a className="" href="https://www.soccer789.com/" target="_blank" rel="noreferrer">Fullstack - Sport Analysis System</a>
                        </div>
                        <div className="text-gray-400 hover:text-gray-300">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different possibilities in real-time for customers.</div>
                        <div className="text-gray-400 hover:text-gray-300">Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.</div>
                        <div className="text-gray-500 hover:text-gray-400 rounded-md bg-gray-700 bg-opacity-20 px-2 py-1">React • Redux-Saga • AntD • Playwright • Nginx • NodeJS • MongoDB • Linux</div>
                    </div>
                </div>

                <div className="col-span-2 text-gray-500">2012-2012</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div>Middleware System Engineer - IBM</div>
                        <div className="text-gray-400 hover:text-gray-300">Implemented and on-going support Middleware infrastructure for internal project</div>
                        <div className="text-gray-500 hover:text-gray-400 rounded-md bg-gray-700 bg-opacity-20 px-2 py-1">IBM Websphere • Linux</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;