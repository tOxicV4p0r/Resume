import ProfilePic from "../../asset/profilepixel.png"

function About() {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-2">
                <img src={ProfilePic} className="h-24 rounded-full" />
            </div>
            <div className="col-span-6 self-center">
                <div className="text-xl font-medium">Kraisorn Deelert</div>
                <div className="space-x-2 text-gray-400 font-medium">
                    <span>Fullstack Developer</span>
                    <span>•</span>
                    <span>Crypto Maxi</span>
                </div>
                <div className="text-gray-500 font-bold text-sm">k.deelert@gmail.com</div>
            </div>
        </div>
    );
};

export default About;