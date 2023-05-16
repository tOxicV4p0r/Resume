import ProfilePic from "../../asset/profilepixel.png"

function Header() {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-2 self-center mx-auto sm:mx-0">
                <img src={ProfilePic} alt="me" className="h-20 sm:h-28 rounded-full" />
            </div>
            <div className="col-span-6 self-center">
                <div className="text-xl font-medium">Kraisorn Deelert</div>
                <div className="space-x-2 text-gray-400 hover:text-gray-300 font-medium underline underline-offset-4 decoration-gray-700">
                    <span>Fullstack Developer • Crypto Maxi</span>
                </div>
                <div className="text-gray-500 hover:text-gray-400 font-bold text-sm">CPE | Mahanakorn University</div>
                <div className="text-gray-500 hover:text-gray-400 font-bold text-sm">k.deelert@gmail.com</div>
            </div>
        </div>
    );
};

export default Header;