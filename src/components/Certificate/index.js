function Certificate() {
    return (
        <div className="space-y-3">
            <span>Certification </span>
            <div className="grid grid-cols-8 gap-y-5">
                <div className="col-span-2 text-gray-500">June 2023</div>
                <div className="col-span-6">
                    <div className="flex flex-col space-y-2">
                        <div><a className="underline underline-offset-4 after:content-['_↗']" href="https://coursera.org/share/ec72454c71270ede2c47fd23e720be2d" target="_blank" rel="noreferrer">Meta Front-End Developer by Meta</a></div>
                        <div className="text-gray-400 hover:text-gray-300"></div>
                        <div className="text-gray-500 hover:text-gray-400 rounded-md bg-gray-700 bg-opacity-20 px-2 py-1">Skills : UI/UX design • JavaScript • React • HTML • CSS</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Certificate;