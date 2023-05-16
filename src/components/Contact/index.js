function Contact() {
    return (
        <div className="space-y-3">
            <span>Links</span>
            <div className="grid grid-cols-8 gap-y-3">
                <div className="col-span-2 text-gray-500">Github</div>
                <div className="col-span-6">
                    <div>
                        <a className="underline underline-offset-4 after:content-['_↗']" href="https://github.com/tOxicV4p0r" target="_blank">tOxicV4p0r</a>
                    </div>
                </div>
                <div className="col-span-2 text-gray-500">Youtube</div>
                <div className="col-span-6">
                    <div>
                        <a className="underline underline-offset-4 after:content-['_↗']" href="https://www.youtube.com/@blackboi96" target="_blank">Blackboy96</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default Contact;