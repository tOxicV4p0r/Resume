function Nav() {
    return (
        <div>
            <div className="fixed left-0 top-0 p-4">
                <img className="h-10 rounded-full" src="https://i.seadn.io/gcs/files/68de9d09c2e406c342f2321fb0294361.gif?auto=format&dpr=1&w=1000" alt="The Potatoz" />
            </div>
            <div className="float-right p-4">
                <button className="px-2 py-1 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-semibold rounded-md shadow-lg focus:outline-none">Connect Wallet</button>
            </div>
        </div>
    );
};

export default Nav;